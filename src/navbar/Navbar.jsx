import React from 'react';
import "./navbar.css"

const Navbar = () => {
  return (
      <>
          <header className="container-fluid header d-flex align-items-center justify-content-between">
            <div className="logos">
              <a href="#" className="logo">Portfolio.</a>
            </div>
            <div className="icons">
              <nav className="navbar">
                <a href="#" style={{'--i': 1}} className="active">Home</a>
                <a href="#" style={{'--i': 2}}>About</a>
                <a href="#" style={{'--i': 3}}>Skill</a>
                <a href="#" style={{'--i': 4}}>Portfolio</a>
                <a href="#" className="me-5" style={{'--i': 5}}>Contact</a>
              </nav>
            </div>
          </header>
      </>
  );
};

export default Navbar;
