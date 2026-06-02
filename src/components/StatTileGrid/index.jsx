import React from "react";
import StatTile from "../StatTile";

// Helpers to present raw numbers consistently.
const num = (v) => (v == null ? "—" : v);
const pct = (v) => (v == null ? "—" : `${(v * 100).toFixed(1)}%`);

// Renders the regular-season stats as tiles, pairing each rate stat with its
// matching league rank. The keys map directly to the teams.json stat objects.
function StatTileGrid({ numericalStats = {}, leagueRanking = {} }) {
  const n = numericalStats;
  const r = leagueRanking;

  const tiles = [
    { label: "Games", value: num(n.gamesPlayed) },
    { label: "Wins", value: num(n.wins) },
    { label: "Losses", value: num(n.losses) },
    { label: "OT", value: num(n.ot) },
    { label: "Points", value: num(n.pts), rank: r.pts },
    { label: "Goals / Game", value: num(n.goalsPerGame), rank: r.goalsPerGame },
    { label: "Goals Against / Game", value: num(n.goalsAgainstPerGame), rank: r.goalsAgainstPerGame },
    { label: "Save %", value: pct(n.savePctg), rank: r.savePctRank },
    { label: "Shots / Game", value: num(n.shotsPerGame), rank: r.shotsPerGame },
    { label: "Shots Against", value: num(n.shotsAllowed), rank: r.shotsAllowed },
    { label: "Shooting %", value: pct(n.shootingPctg), rank: r.shootingPctRank },
    { label: "Faceoff %", value: pct(n.faceOffWinPercentage), rank: r.faceOffWinPercentage },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {tiles.map((t) => (
        <StatTile key={t.label} label={t.label} value={t.value} rank={t.rank} />
      ))}
    </div>
  );
}

export default StatTileGrid;
