"""Fetch and normalize NHL team data into src/data/teams.json.

The app used to call the now-defunct statsapi.web.nhl.com endpoints directly from
the browser. That host has been shut down, so this script fetches the current
free, public NHL APIs, joins and normalizes them, and writes a single static
JSON file the React app imports at build time.

Sources (all unauthenticated):
  - https://api-web.nhle.com/v1/standings/now           (active teams: name,
        abbrev, logo, conference, division, city)
  - https://api.nhle.com/stats/rest/en/team/summary     (per-team season stats,
        including the numeric teamId)
  - https://api-web.nhle.com/v1/club-stats/{abbrev}/now (per-team roster with
        per-player season stats and headshot URLs)

The first two are joined on full team name (unambiguous; triCode is reused
across franchise rebrands such as Utah, so it is not safe as a join key). The
roster is fetched per team by abbreviation and attached as a `roster` field.

Run:
  pip install -r python/requirements.txt
  python python/fetch_teams.py
"""

import json
import os
import time

import requests

# The NHL API 403s some default user agents; send a browser-like one.
HEADERS = {"User-Agent": "Mozilla/5.0 (nhl-teams-api data fetcher)"}

STANDINGS_URL = "https://api-web.nhle.com/v1/standings/now"
SUMMARY_URL = "https://api.nhle.com/stats/rest/en/team/summary"
CLUB_STATS_URL = "https://api-web.nhle.com/v1/club-stats/{abbrev}/now"

# Be polite: small delay between the 32 sequential per-team roster requests.
ROSTER_REQUEST_DELAY = 0.3

# teams.json lives in src/data so Create React App can import it directly.
OUTPUT_PATH = os.path.join(
    os.path.dirname(__file__), "..", "src", "data", "teams.json"
)


def get_json(url, **params):
    resp = requests.get(url, headers=HEADERS, params=params or None, timeout=30)
    resp.raise_for_status()
    return resp.json()


def season_id_from_date(date_str):
    """Derive the NHL seasonId (e.g. 20252026) from a YYYY-MM-DD standings date.

    The NHL season spans October -> June, so any month from September onward
    belongs to the season starting that calendar year.
    """
    year, month = int(date_str[:4]), int(date_str[5:7])
    start = year if month >= 9 else year - 1
    return int(f"{start}{start + 1}")


def rank(rows, key, *, higher_is_better=True):
    """Return {teamId: 1-based rank} for `key` across all rows."""
    ordered = sorted(
        rows, key=lambda r: r[key], reverse=higher_is_better
    )
    return {row["teamId"]: i + 1 for i, row in enumerate(ordered)}


def _full_name(player):
    """Combine the localized first/last name objects into a display string."""
    first = (player.get("firstName") or {}).get("default", "")
    last = (player.get("lastName") or {}).get("default", "")
    return f"{first} {last}".strip()


def _format_toi(seconds):
    """Format average time-on-ice (seconds, float) as M:SS, or None."""
    if not seconds:
        return None
    total = int(round(seconds))
    return f"{total // 60}:{total % 60:02d}"


def _round(value, digits):
    """Round, tolerating a missing (None) value."""
    return round(value, digits) if value is not None else None


def fetch_roster(abbrev):
    """Return {"skaters": [...], "goalies": [...]} for a team abbreviation.

    Uses the club-stats endpoint, which carries both per-player season stats and
    absolute headshot URLs. On any failure the team still gets a well-formed
    (empty) roster so downstream code never has to special-case missing data.
    """
    try:
        data = get_json(CLUB_STATS_URL.format(abbrev=abbrev))
    except (requests.RequestException, ValueError) as exc:
        print(f"  WARN: no roster for {abbrev}: {exc}")
        return {"skaters": [], "goalies": []}

    skaters = [
        {
            "playerId": p.get("playerId"),
            "headshot": p.get("headshot"),
            "name": _full_name(p),
            "positionCode": p.get("positionCode"),
            "gamesPlayed": p.get("gamesPlayed"),
            "goals": p.get("goals"),
            "assists": p.get("assists"),
            "points": p.get("points"),
            "plusMinus": p.get("plusMinus"),
            "penaltyMinutes": p.get("penaltyMinutes"),
            "powerPlayGoals": p.get("powerPlayGoals"),
            "shots": p.get("shots"),
            "shootingPctg": _round(p.get("shootingPctg"), 3),
            "toi": _format_toi(p.get("avgTimeOnIcePerGame")),
            "faceoffWinPctg": _round(p.get("faceoffWinPctg"), 3),
        }
        for p in data.get("skaters", [])
    ]
    goalies = [
        {
            "playerId": p.get("playerId"),
            "headshot": p.get("headshot"),
            "name": _full_name(p),
            "gamesPlayed": p.get("gamesPlayed"),
            "gamesStarted": p.get("gamesStarted"),
            "wins": p.get("wins"),
            "losses": p.get("losses"),
            "overtimeLosses": p.get("overtimeLosses"),
            "goalsAgainstAverage": _round(p.get("goalsAgainstAverage"), 2),
            "savePercentage": _round(p.get("savePercentage"), 3),
            "shotsAgainst": p.get("shotsAgainst"),
            "saves": p.get("saves"),
            "goalsAgainst": p.get("goalsAgainst"),
            "shutouts": p.get("shutouts"),
        }
        for p in data.get("goalies", [])
    ]

    # Most-productive first so the default table order is meaningful.
    skaters.sort(key=lambda s: (s["points"] or 0, s["goals"] or 0), reverse=True)
    goalies.sort(key=lambda g: g["gamesPlayed"] or 0, reverse=True)
    return {"skaters": skaters, "goalies": goalies}


def build_teams():
    standings = get_json(STANDINGS_URL)["standings"]
    season_id = season_id_from_date(standings[0]["date"])

    summary = get_json(
        SUMMARY_URL,
        cayenneExp=f"seasonId={season_id} and gameTypeId=2",
    )["data"]
    # Join on full name: triCode is reused across rebrands, so it is ambiguous.
    summary_by_name = {row["teamFullName"]: row for row in summary}

    # Derive total shots so save % and shooting % can be computed.
    for row in summary:
        gp = row["gamesPlayed"] or 1
        row["_shotsForTotal"] = row["shotsForPerGame"] * gp
        row["_shotsAgainstTotal"] = row["shotsAgainstPerGame"] * gp
        row["_savePctg"] = round(
            1 - row["goalsAgainst"] / row["_shotsAgainstTotal"], 3
        )
        row["_shootingPctg"] = round(
            row["goalsFor"] / row["_shotsForTotal"], 3
        )

    # Precompute league ranks across all teams for each ranked stat.
    ranks = {
        "pts": rank(summary, "points"),
        "goalsPerGame": rank(summary, "goalsForPerGame"),
        "goalsAgainstPerGame": rank(
            summary, "goalsAgainstPerGame", higher_is_better=False
        ),
        "savePctRank": rank(summary, "_savePctg"),
        "shotsPerGame": rank(summary, "shotsForPerGame"),
        "shotsAllowed": rank(
            summary, "shotsAgainstPerGame", higher_is_better=False
        ),
        "shootingPctRank": rank(summary, "_shootingPctg"),
        "faceOffWinPercentage": rank(summary, "faceoffWinPct"),
    }

    teams = []
    for entry in standings:
        name = entry["teamName"]["default"]
        stats = summary_by_name.get(name)
        if stats is None:
            # No season summary yet (e.g. preseason) -> skip stats join.
            continue

        abbrev = entry["teamAbbrev"]["default"]
        print(f"  fetching roster for {name} ({abbrev})...")
        roster = fetch_roster(abbrev)
        time.sleep(ROSTER_REQUEST_DELAY)

        teams.append(
            {
                "id": stats["teamId"],
                "team": name,
                "city": entry["placeName"]["default"],
                "conference": entry["conferenceName"],
                "division": entry["divisionName"],
                "logo": entry["teamLogo"],
                "abbrev": abbrev,
                "roster": roster,
                "stats": {
                    "numericalStats": {
                        "gamesPlayed": stats["gamesPlayed"],
                        "wins": stats["wins"],
                        "losses": stats["losses"],
                        "pts": stats["points"],
                        "ot": stats["otLosses"],
                        "goalsPerGame": round(stats["goalsForPerGame"], 2),
                        "goalsAgainstPerGame": round(
                            stats["goalsAgainstPerGame"], 2
                        ),
                        "savePctg": stats["_savePctg"],
                        "shotsPerGame": round(stats["shotsForPerGame"], 1),
                        "shotsAllowed": round(stats["shotsAgainstPerGame"], 1),
                        "shootingPctg": stats["_shootingPctg"],
                        "faceOffWinPercentage": round(
                            stats["faceoffWinPct"], 3
                        ),
                    },
                    "leagueRanking": {
                        col: by_id[stats["teamId"]]
                        for col, by_id in ranks.items()
                    },
                },
            }
        )

    teams.sort(key=lambda t: t["team"])
    return season_id, teams


def main():
    season_id, teams = build_teams()
    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as fh:
        json.dump(teams, fh, indent=2, ensure_ascii=False)
        fh.write("\n")
    print(f"Wrote {len(teams)} teams (season {season_id}) to {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
