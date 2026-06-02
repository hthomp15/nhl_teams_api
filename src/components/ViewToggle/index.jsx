import React from "react";

// Segmented control to switch the teams list between a card grid and a table.
function ViewToggle({ view, onChange }) {
  const base =
    "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-semibold transition-colors";
  const active = "bg-ice text-rink-950";
  const inactive = "text-slate-400 hover:text-slate-100";

  return (
    <div
      className="inline-flex items-center gap-1 rounded-lg border border-rink-border bg-rink-800 p-1"
      role="group"
      aria-label="Choose teams layout"
    >
      <button
        type="button"
        className={`${base} ${view === "grid" ? active : inactive}`}
        aria-pressed={view === "grid"}
        onClick={() => onChange("grid")}
      >
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <rect x="2" y="2" width="7" height="7" rx="1" />
          <rect x="11" y="2" width="7" height="7" rx="1" />
          <rect x="2" y="11" width="7" height="7" rx="1" />
          <rect x="11" y="11" width="7" height="7" rx="1" />
        </svg>
        Grid
      </button>
      <button
        type="button"
        className={`${base} ${view === "table" ? active : inactive}`}
        aria-pressed={view === "table"}
        onClick={() => onChange("table")}
      >
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <rect x="2" y="3" width="16" height="3" rx="1" />
          <rect x="2" y="8.5" width="16" height="3" rx="1" />
          <rect x="2" y="14" width="16" height="3" rx="1" />
        </svg>
        Table
      </button>
    </div>
  );
}

export default ViewToggle;
