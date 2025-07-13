import { Link } from 'react-router-dom';

const ContactSection = ({id , image}) => {
  return (
    <section 
      className="section contact-section" 
      id={id}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="contact-overlay"></div>
      <div className="contact-content">
        <h2 className="contact-heading">
          Global presence, global recognition — Contact me to take your next step.
        </h2>
        <div className="contact-button-container">
          <Link to="/contact" className="contact-button">
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;