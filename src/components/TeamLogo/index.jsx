import React, { useState } from "react";

// Renders a team logo from the NHL CDN, falling back to the team abbreviation
// in a styled circle if the image is missing or fails to load.
function TeamLogo({ logo, abbrev, team, className = "h-20 w-20" }) {
  const [failed, setFailed] = useState(false);

  if (failed || !logo) {
    return (
      <span
        className={`${className} inline-flex items-center justify-center rounded-full bg-rink-700 font-display font-bold text-slate-200`}
        aria-label={team ? `${team} logo` : "team logo"}
      >
        {abbrev || "NHL"}
      </span>
    );
  }

  return (
    <img
      src={logo}
      alt={team ? `${team} logo` : "team logo"}
      className={`${className} object-contain`}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

export default TeamLogo;
