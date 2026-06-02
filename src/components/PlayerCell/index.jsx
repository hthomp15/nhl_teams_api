import React, { useState } from "react";

function initials(name = "") {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// First column of a roster row: lazy-loaded headshot (with initials fallback)
// alongside the player's name and position.
function PlayerCell({ headshot, name, position }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex items-center gap-3">
      {failed || !headshot ? (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rink-700 text-xs font-bold text-slate-300">
          {initials(name)}
        </span>
      ) : (
        <img
          src={headshot}
          alt={name}
          className="h-10 w-10 shrink-0 rounded-full bg-rink-700 object-cover"
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
      <span className="flex flex-col leading-tight">
        <span className="font-semibold text-slate-100">{name}</span>
        {position && (
          <span className="text-xs text-slate-500">{position}</span>
        )}
      </span>
    </div>
  );
}

export default PlayerCell;
