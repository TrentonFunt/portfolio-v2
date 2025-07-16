import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="fixed-initials">T-A</div>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="nav-links-container">
            <NavLink to="/" end className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/work" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Work<sup>®</sup>
            </NavLink>
            <NavLink to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;