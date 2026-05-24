export function Timeline() {
  return (
    <section className="timeline" id="timeline">
      <div className="section-container">
        <div className="section-header">
          <p className="section-label">Career Path</p>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <span className="timeline-date">2020 — Present</span>
              <h3 className="timeline-role">Senior Product Designer</h3>
              <span className="timeline-company">Meta</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <span className="timeline-date">2018 — 2020</span>
              <h3 className="timeline-role">Director of UX and Product Design</h3>
              <span className="timeline-company">Yalo</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <span className="timeline-date">2017 — 2018</span>
              <h3 className="timeline-role">Product Design Manager</h3>
              <span className="timeline-company">Pulpomatic</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <span className="timeline-date">2015 — 2017</span>
              <h3 className="timeline-role">Design Consultant</h3>
              <span className="timeline-company">Multiplica, The Cocktail</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
