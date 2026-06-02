import React from "react";

function Footer() {
  return (
    <footer className="mt-12 border-t border-rink-border">
      <div className="container py-6 text-center text-sm text-slate-500">
        <p>
          Made with <span role="img" aria-label="heart">❤️</span> by Haile Thompson
        </p>
        <p className="mt-1 text-xs text-slate-600">
          Data via the NHL public API. Not affiliated with the National Hockey League.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
