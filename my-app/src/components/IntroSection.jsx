const IntroSection = () => {
  return (
    <section className="section intro-section" id="section2">
      <div className="intro-content">
        <h2 className="intro-initials">T-A</h2>
        <p className="intro-description">
          I help brands craft meaningful stories and compelling visuals that deeply
          resonate with their audience, foster strong connections, build lasting loyalty,
          and drive sustainable long-term growth.
        </p>
      </div>

      <hr className="section-divider" />
      
      <div className="intro-bottom">
        <div className="intro-column">
          <h3 className="column-title">From A to Z</h3>
          <p className="column-text">
            I manage your entire branding process, from concept to execution. 
            Whether it's logo design, messaging, or strategy, I ensure everything 
            aligns for a cohesive and impactful brand.
          </p>
          <a href="#" className="column-link">More about me</a>
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
    </section>
  );
};

export default IntroSection;