import React from "react";
import PlayerCell from "../PlayerCell";

const fmt = (v) => (v == null ? "—" : v);
const pct = (v) => (v == null ? "—" : `${(v * 100).toFixed(1)}%`);

// Column configs map normalized teams.json roster fields to table columns.
export const SKATER_COLUMNS = [
  { key: "gamesPlayed", label: "GP", get: (p) => fmt(p.gamesPlayed) },
  { key: "goals", label: "G", get: (p) => fmt(p.goals) },
  { key: "assists", label: "A", get: (p) => fmt(p.assists) },
  { key: "points", label: "PTS", get: (p) => fmt(p.points), strong: true },
  { key: "plusMinus", label: "+/-", get: (p) => (p.plusMinus == null ? "—" : (p.plusMinus > 0 ? `+${p.plusMinus}` : p.plusMinus)) },
  { key: "penaltyMinutes", label: "PIM", get: (p) => fmt(p.penaltyMinutes) },
  { key: "shots", label: "S", get: (p) => fmt(p.shots) },
  { key: "shootingPctg", label: "S%", get: (p) => pct(p.shootingPctg) },
  { key: "toi", label: "TOI", get: (p) => fmt(p.toi) },
];

export const GOALIE_COLUMNS = [
  { key: "gamesPlayed", label: "GP", get: (p) => fmt(p.gamesPlayed) },
  { key: "gamesStarted", label: "GS", get: (p) => fmt(p.gamesStarted) },
  { key: "wins", label: "W", get: (p) => fmt(p.wins), strong: true },
  { key: "losses", label: "L", get: (p) => fmt(p.losses) },
  { key: "overtimeLosses", label: "OTL", get: (p) => fmt(p.overtimeLosses) },
  { key: "goalsAgainstAverage", label: "GAA", get: (p) => fmt(p.goalsAgainstAverage) },
  { key: "savePercentage", label: "SV%", get: (p) => pct(p.savePercentage) },
  { key: "shutouts", label: "SO", get: (p) => fmt(p.shutouts) },
];

function RosterTable({ players, columns, type }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-rink-border shadow-card">
      <table className="w-full min-w-[640px] text-sm">
        <thead>
          <tr className="bg-rink-700 text-slate-200">
            <th className="px-4 py-2 text-left font-display font-bold uppercase tracking-wide">
              {type === "goalie" ? "Goalie" : "Player"}
            </th>
            {columns.map((c) => (
              <th key={c.key} className="px-3 py-2 text-center font-display font-bold uppercase tracking-wide">
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {players.map((p) => (
            <tr
              key={p.playerId}
              className="odd:bg-rink-850 even:bg-rink-800 text-slate-300 hover:bg-rink-700 transition-colors"
            >
              <td className="px-4 py-2">
                <PlayerCell headshot={p.headshot} name={p.name} position={p.positionCode} />
              </td>
              {columns.map((c) => (
                <td
                  key={c.key}
                  className={`px-3 py-2 text-center tabular-nums ${c.strong ? "font-bold text-slate-100" : ""}`}
                >
                  {c.get(p)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RosterTable;
