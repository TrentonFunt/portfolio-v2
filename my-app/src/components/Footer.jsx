import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram, 
  faSquareXTwitter, 
  faLinkedinIn,
  faYoutube,
  faFacebook 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope, 
  faPhone 
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="section footer-section" id="section6">
      <div className="footer-content">
        <nav className="footer-nav">
          <NavLink to="/" end className="footer-nav-link">
            <span>Home</span>
          </NavLink>
          <NavLink to="/about" className="footer-nav-link">
            <span>About</span>
          </NavLink>
          <NavLink to="/work" className="footer-nav-link">
            <span>Work<sup>(6)</sup></span>
          </NavLink>
          <NavLink to="/contact" className="footer-nav-link">
            <span>Contact</span>
          </NavLink>
        </nav>
        
        {/* Social media icons */}
        <div className="social-media">
          <div className="social-icons">
            <div>
              <a href="https://instagram.com" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            </div>
            <div>
              <a href="https://twitter.com" className="social-icon">
              <FontAwesomeIcon icon={faSquareXTwitter} />
            </a>
            </div>
            <div>
              <a href="https://linkedin.com" className="social-icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            </div>
            <div>
              <a href="https:/youtube.com" className='social-icon'>
              <FontAwesomeIcon icon={faYoutube}/>
            </a>
            </div>
            <div>
              <a href="https:/facebook.com" className='social-icon'>
              <FontAwesomeIcon icon={faFacebook}/>
            </a>
            </div>
          </div>
          
          <div className="contact-info">
            <a href="mailto:contact@example.com" className="contact-link">
              <FontAwesomeIcon icon={faEnvelope} className="icon" /> contact@example.com
            </a>
            <a href="tel:+1234567890" className="contact-link">
              <FontAwesomeIcon icon={faPhone} className="icon" /> +1 (234) 567-890
            </a>
          </div>
        </div>
        
        {/* Legal links - centered bottom */}
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