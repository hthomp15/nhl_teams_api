import React from "react";
import { Link } from "react-router-dom";
import TeamLogo from "../TeamLogo";

// A single team tile in the grid view: large logo, name, and conference/division.
function TeamCard({ team }) {
  return (
    <Link
      to={`/nhl_teams_api/stats/${team.id}`}
      className="group flex flex-col items-center rounded-xl border border-rink-border bg-rink-800 p-5 text-center shadow-card transition-all hover:-translate-y-0.5 hover:border-ice hover:bg-rink-700"
    >
      <TeamLogo
        logo={team.logo}
        abbrev={team.abbrev}
        team={team.team}
        className="h-20 w-20 transition-transform group-hover:scale-105"
      />
      <h3 className="mt-3 font-display text-lg font-bold uppercase leading-tight tracking-wide text-slate-100">
        {team.team}
      </h3>
      <p className="mt-0.5 text-xs text-slate-400">{team.city}</p>
      <span className="mt-2 inline-block rounded-full border border-rink-border bg-rink-900 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-ice">
        {team.division}
      </span>
    </Link>
  );
}

export default TeamCard;
