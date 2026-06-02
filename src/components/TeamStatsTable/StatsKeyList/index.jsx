import React from "react";

const KEYS = [
  ["GP", "Games Played"],
  ["W", "Wins"],
  ["L", "Losses"],
  ["PTS", "Points"],
  ["OT", "Overtime Games"],
  ["GPG", "Goals Per Game"],
  ["GAPG", "Goals Against Per Game"],
  ["SV%", "Save Percentage"],
  ["S", "Shots"],
  ["SA", "Shots Allowed"],
  ["S%", "Shooting Percentage"],
  ["FOW%", "Faceoff Win Percentage"],
];

function StatsKeyList() {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
      {KEYS.map(([abbr, label]) => (
        <div key={abbr} className="flex items-center gap-2 text-sm">
          <span className="inline-flex min-w-[3rem] justify-center rounded bg-rink-700 px-2 py-0.5 font-display font-bold text-ice">
            {abbr}
          </span>
          <span className="text-slate-400">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default StatsKeyList;
