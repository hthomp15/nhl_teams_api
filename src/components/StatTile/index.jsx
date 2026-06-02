import React from "react";

// A single stat "tile": big value, small label, optional league-rank badge.
function StatTile({ label, value, rank }) {
  const top5 = typeof rank === "number" && rank <= 5;

  return (
    <div className="relative flex flex-col justify-center rounded-xl border border-rink-border bg-rink-800 px-4 py-3 shadow-card">
      {rank != null && (
        <span
          className={`absolute right-2 top-2 rounded px-1.5 py-0.5 text-[10px] font-bold ${
            top5 ? "bg-gold/20 text-gold" : "bg-rink-700 text-slate-400"
          }`}
          title={`League rank: ${rank}`}
        >
          #{rank}
        </span>
      )}
      <span className="font-display text-2xl font-bold leading-none text-slate-100">
        {value}
      </span>
      <span className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </span>
    </div>
  );
}

export default StatTile;
