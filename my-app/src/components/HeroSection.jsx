import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section className="section hero-section" id="section1" >
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title fade-in-text">Frontend Engineer</h1>
          <p className="hero-subtitle fade-in-text">
            I help designers and agencies elevate <br></br> their branding with creative <br></br> development support.
          </p>
        </div>
        
        <div className="hero-image-container">
            <img 
              src="/images/hero-image.webp" 
              alt="portrait photo" 
              className="hero-image"
            />

            <nav className={`hero-nav fade-in-text ${scrolled ? 'hidden' : ''}`}>
            <NavLink to="/" end className="hero-nav-link">
              <span>Home</span>
            </NavLink>
            <NavLink to="/about" className="hero-nav-link">
              <span>About</span>
            </NavLink>
            <NavLink to="/work" className="hero-nav-link">
              <span>Work<sup>(6)</sup></span>
            </NavLink>
            <NavLink to="/contact" className="hero-nav-link">
              <span>Contact</span>
            </NavLink>
          </nav>
        </div>
        
        <div className="hero-name fade-in-text">TIWALADE ADEGOKE</div>
      </div>
    </section>
  );
};

export default HeroSection;