import React, { useState } from 'react';
import "./navbar.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
      <>
          <header className={`container-fluid header d-flex align-items-center justify-content-between ${menuOpen ? 'menu-open' : ''}`}>
            <div className="logos">
              <a href="#" className="logo">Portfolio.</a>
            </div>
            <div className={`icons ${menuOpen ? 'open' : ''}`}>
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
  <a href="#" style={{'--i': 1}} className="active">Home</a>
  <a href="#" style={{'--i': 2}}>About</a>
  <a href="#" style={{'--i': 3}}>Expertise</a>
  <a href="#" style={{'--i': 4}}>Projects</a>
  <a href="#" style={{'--i': 5}}>Contact</a>
</nav>

            </div>
            <div className="hamburger-icon" onClick={toggleMenu}>
              <div className={`line ${menuOpen ? 'open' : ''}`}></div>
              <div className={`line ${menuOpen ? 'open' : ''}`}></div>
              <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            </div>
          </header>
      </>
  );
};

export default Navbar;
