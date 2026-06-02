import React from "react";
import TeamLogo from "../TeamLogo";

// Broadcast-style header for a team page: large logo, name, and headline stats.
function TeamHero({ teamName, logo, abbrev, city, conference, division, numericalStats = {}, leagueRanking = {} }) {
  const n = numericalStats;
  const record =
    n.wins != null ? `${n.wins}-${n.losses}-${n.ot}` : "—";

  const chips = [city, conference, division].filter(Boolean);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-rink-border bg-gradient-to-br from-rink-800 to-rink-900 p-6 shadow-card sm:p-8">
      <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center">
        <TeamLogo
          logo={logo}
          abbrev={abbrev}
          team={teamName}
          className="h-28 w-28 shrink-0 md:h-36 md:w-36"
        />
        <div className="text-center sm:text-left">
          <h1 className="font-display text-3xl font-extrabold uppercase tracking-wide text-slate-100 md:text-5xl">
            {teamName}
          </h1>
          {chips.length > 0 && (
            <div className="mt-2 flex flex-wrap justify-center gap-2 sm:justify-start">
              {chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-rink-border bg-rink-900/60 px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-300"
                >
                  {c}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-3 sm:ml-auto">
          <HeroStat label="Record" value={record} />
          <HeroStat label="Points" value={n.pts != null ? n.pts : "—"} rank={leagueRanking.pts} />
          <HeroStat label="Games" value={n.gamesPlayed != null ? n.gamesPlayed : "—"} />
        </div>
      </div>
    </div>
  );
}

function HeroStat({ label, value, rank }) {
  return (
    <div className="min-w-[72px] rounded-lg bg-rink-950/40 px-3 py-2 text-center">
      <div className="font-display text-2xl font-bold text-ice">{value}</div>
      <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
        {label}
        {typeof rank === "number" && (
          <span className="ml-1 text-gold">#{rank}</span>
        )}
      </div>
    </div>
  );
}

export default TeamHero;
