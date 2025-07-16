import Button from './Button';

const IntroSection = () => {
  return (
    <section className="section intro-section" id="section2">
      <div className="intro-top">
        <div className="intro-content">
          <div className="intro-description">
            <div className="intro-image">
              <img 
                src="images/intro-image.webp" 
                alt="Intro Image" 
                className="intro-image"
              />
            </div>
            I help brands craft meaningful stories and compelling visuals that deeply
            resonate with their audience, foster strong connections, build lasting loyalty,
            and drive sustainable long-term growth.
          </div>
        </div>
      </div>

      <div className="right-aligned-container">
      <hr className="section-divider" />

      <div className="intro-bottom">
        <div className="intro-column">
          <h3 className="column-title">From A to Z</h3>
          <p className="column-text">
            I manage your entire branding process, from concept to execution. 
            Whether it's logo design, messaging, or strategy, I ensure everything 
            aligns for a cohesive and impactful brand.
          </p>
          <Button 
            text="More about me" 
            onClick={() => window.location.href = "#about"} 
            width="fit-content"
            padding="0.5rem 1.5rem"
            textSize="1rem"
            spanHeight="1.8rem"

          />
        </div>
        
        <div className="intro-column">
          <h3 className="column-title">Solo or Team</h3>
          <p className="column-text">
            I work both independently and with a trusted team, adapting to your 
            project's needs to deliver the best results, whether it's a solo vision 
            or a collaborative effort.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default IntroSection;