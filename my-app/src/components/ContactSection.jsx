import Button from "./Button";

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
          <Button 
            className="contact-button"
            text="Contact Me" 
            onClick={() => window.location.href = "#contact"} 
            width="fit-content"
            padding="0.5rem 1.5rem"
            textSize="4.5rem"
            spanHeight="4.8rem"

          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;