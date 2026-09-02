export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-label">Andrea Gomez</p>
          <h1 className="hero-title">
            Making complex technology feel simple and <em>human</em>.
          </h1>
          <p className="hero-description">
            Hi! I’m Andrea — a product designer with a psychology background who loves understanding how people think, untangling complex problems, and using AI to create experiences that feel intuitive and effortless.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">View My Work</a>
            <a href="mailto:andreaglavin@gmail.com" className="btn btn-secondary">Let's Talk</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img src="assets/andy.jpg" alt="Andrea" className="hero-image-photo" />
          </div>
          <div className="hero-image-accent"></div>
        </div>
      </div>
    </section>
  );
}
