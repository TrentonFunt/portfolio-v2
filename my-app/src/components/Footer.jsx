import { NavLink } from 'react-router-dom';
import { navLinks } from '../config/navLinks';

const Footer = () => {
  return (
    <footer className="section footer-section" id="section6">
      <div className="footer-content">
        <nav className="footer-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.end}
              className="footer-nav-link"
            >
              {link.label}
              {link.sup && <sup>{link.sup}</sup>}
            </NavLink>
          ))}
        </nav>
        
        <div className="footer-legal">
          <NavLink to="/imprint" className="legal-link">Imprint</NavLink>
          <NavLink to="/privacy" className="legal-link">Privacy Policy</NavLink>
        </div>
        
        <p className="footer-note">You can buy this website.</p>
      </div>
    </footer>
  );
};

export default Footer;