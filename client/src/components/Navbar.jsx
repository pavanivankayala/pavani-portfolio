import { useState } from "react";
import { Link } from "react-router-dom";

const links = ["about", "skills", "projects", "experience", "certificates", "contact"];

export default function Navbar({ theme, onToggle }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Main">
          {links.map((l) => (
            <Link key={l} to={`/#${l}`} onClick={() => setOpen(false)}>
              {l}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={onToggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
