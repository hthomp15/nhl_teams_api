import React from "react";
import TeamCard from "../TeamCard";

// Groups teams by division so the grid mirrors how the NHL is organized.
function groupByDivision(teams) {
  const groups = new Map();
  for (const team of teams) {
    const key = team.division || "Other";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(team);
  }
  // Alphabetical division order keeps the layout stable run-to-run.
  return [...groups.entries()].sort((a, b) => (a[0] > b[0] ? 1 : -1));
}

function TeamsGrid({ teams }) {
  const divisions = groupByDivision(teams);

  return (
    <div className="space-y-10">
      {divisions.map(([division, divisionTeams]) => (
        <section key={division}>
          <div className="mb-4 flex items-center gap-3">
            <h2 className="font-display text-xl font-bold uppercase tracking-wider text-slate-200">
              {division}
            </h2>
            <span className="h-px flex-1 bg-rink-border" />
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {divisionTeams.length} teams
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {divisionTeams.map((team) => (
              <TeamCard key={team.id} team={team} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default TeamsGrid;
