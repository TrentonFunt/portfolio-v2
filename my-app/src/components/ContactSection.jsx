import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <section className="section contact-section" id="section5">
      <div className="contact-content">
        <h2 className="contact-heading">
          Global presence, global recognition — Contact me to take your next step.
        </h2>
        <Link to="/contact" className="contact-button">
          Contact me
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;