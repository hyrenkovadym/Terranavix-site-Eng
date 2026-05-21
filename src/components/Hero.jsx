function Hero({ hero, videoSrc, onPrimaryAction, onSecondaryAction }) {
  return (
    <section className="hero" id="section-top" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div>
          <p className="hero-eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className="hero-title">
            {hero.title}
          </h1>
          <p className="hero-subtitle">{hero.subtitle}</p>

          <ul className="hero-bullets">
            {hero.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>

          <div className="hero-cta-row">
            <button type="button" className="btn-primary" onClick={onPrimaryAction}>
              {hero.ctaPrimary}
            </button>
            <button type="button" className="btn-secondary" onClick={onSecondaryAction}>
              {hero.ctaSecondary}
            </button>
          </div>
        </div>

        <div className="hero-mock" aria-label={hero.chip}>
          <div className="hero-mock-screen">
            <div className="hero-mock-chip">{hero.chip}</div>
            <div className="hero-mock-map">
              <div className="hero-mock-field">
                <video className="hero-mock-video" src={videoSrc} autoPlay muted loop playsInline />
              </div>
              <div className="hero-mock-sidebar" aria-label="Guidance telemetry snapshot">
                {hero.sidebar.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
