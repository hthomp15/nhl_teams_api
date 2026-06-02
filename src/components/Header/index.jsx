import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="w-full mb-6 border-b border-rink-border bg-rink-900/80 backdrop-blur sticky top-0 z-20">
      <div className="container flex items-center gap-3 py-4">
        <Link
          to="/nhl_teams_api"
          className="flex items-center gap-2 group"
          aria-label="NHL Zone home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ice/15 ring-1 ring-ice/40 text-ice text-xl">
            &#127954;
          </span>
          <h1 className="font-display font-extrabold tracking-wide text-2xl sm:text-3xl uppercase text-slate-100">
            NHL <span className="text-ice group-hover:text-ice-bright transition-colors">Zone</span>
          </h1>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
