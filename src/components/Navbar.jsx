import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    ["Home", "hero"],
    ["About", "about"],
    ["Events", "events"],
    ["Schedule", "schedule"],
    ["Register", "register"],
    ["Contact", "contact"],
  ];

  return (
    <nav>
      <a href="#hero" className="nav-brand" onClick={closeMenu}>
        <span className="np">TITAN</span>{" "}
        <span className="nc">2K26</span>
      </a>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navLinks.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={closeMenu}>
            {label}
          </a>
        ))}
      </div>

      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

export default Navbar;