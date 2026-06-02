import React from "react";
import RosterTable, { SKATER_COLUMNS, GOALIE_COLUMNS } from "../RosterTable";

// Renders a team's skaters and goalies, or a graceful empty state.
function RosterSection({ roster }) {
  const skaters = roster?.skaters || [];
  const goalies = roster?.goalies || [];

  if (skaters.length === 0 && goalies.length === 0) {
    return (
      <div className="rounded-xl border border-rink-border bg-rink-800 p-6 text-center text-slate-400">
        Roster data unavailable.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {skaters.length > 0 && (
        <div>
          <h3 className="mb-3 font-display text-xl font-bold uppercase tracking-wider text-slate-200">
            Skaters
          </h3>
          <RosterTable players={skaters} columns={SKATER_COLUMNS} type="skater" />
        </div>
      )}
      {goalies.length > 0 && (
        <div>
          <h3 className="mb-3 font-display text-xl font-bold uppercase tracking-wider text-slate-200">
            Goalies
          </h3>
          <RosterTable players={goalies} columns={GOALIE_COLUMNS} type="goalie" />
        </div>
      )}
    </div>
  );
}

export default RosterSection;
