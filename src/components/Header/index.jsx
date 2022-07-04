import React from "react";
import { Link } from "react-router-dom";

function Header() { 
  return (
    <nav className="w-full mb-4">
     <h1 className="text-3xl font-mono font-bold text-center bg-blue-200/75 py-3 text-white"><Link to="/nhl_teams_api">NHL Reference</Link></h1>
    </nav>
    );
}

export default Header;
