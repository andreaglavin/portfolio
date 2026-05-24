export function Work() {
  return (
    <section className="work" id="work">
      <div className="section-container">
        <div className="section-header">
          <p className="section-label">Selected Work</p>
          <h2 className="section-title">Work Highlights</h2>
          <p className="section-subtitle">A selection of projects where design thinking and execution drove measurable impact.</p>
        </div>

        <div className="work-grid">
          {/* Project 1 — GenAI for Filtering */}
          <div className="work-card">
            <div className="work-card-image">
              <div className="work-card-img-wrapper">
                <img src="assets/GenAI - Showing results.gif" alt="GenAI Filtering Panel" className="work-card-img" />
              </div>
              <div className="work-card-overlay">
                <a href="#/case-study-1" className="btn btn-primary">See the Case Study →</a>
              </div>
            </div>
            <div className="work-card-content">
              <div className="work-card-tags">
                <span className="tag">GenAI</span>
                <span className="tag">Enterprise B2B</span>
                <span className="tag">0 → 1</span>
              </div>
              <h3 className="work-card-title">GenAI for Filtering — Designing the Future of Data Exploration</h3>
              <p className="work-card-description">Led UX design for Meta's first GenAI-powered feature in Actionable Insights — a natural language querying system that lets Telecom Partners explore complex network and market data conversationally. Drove design from hackathon POC through pilot and launch.</p>
              <div className="work-card-stats">
                <div className="work-stat">
                  <span className="work-stat-number">~89%</span>
                  <span className="work-stat-label">Prompt Acceptance</span>
                </div>
                <div className="work-stat">
                  <span className="work-stat-number">49→85%</span>
                  <span className="work-stat-label">AI Response Quality</span>
                </div>
                <div className="work-stat">
                  <span className="work-stat-number">0 → 1</span>
                  <span className="work-stat-label">First AI Feature</span>
                </div>
              </div>
              <a href="#/case-study-1" className="work-card-cta">See the Case Study →</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="work-card">
            <div className="work-card-image">
              <div className="work-card-img-wrapper">
                <img src="assets/Opportunities.png" alt="Analytics Suite — Decision-Support Engine" className="work-card-img" />
              </div>
            </div>
            <div className="work-card-content">
              <div className="work-card-tags">
                <span className="tag">Product Strategy</span>
                <span className="tag">0 → 1</span>
                <span className="tag">Data Analytics</span>
              </div>
              <h3 className="work-card-title">From Reporting to Action — Redesigning the Analytics Suite</h3>
              <p className="work-card-description">Led the transformation of a passive reporting tool into a proactive decision-support engine by bridging the gap between seeing data to identifying and acting on opportunities. Designed a unified Criteria Engine that replaced static dashboards, enabling users to define custom opportunity logic across thousands of data combinations.</p>
              <div className="work-card-stats">
                <div className="work-stat">
                  <span className="work-stat-number">20% ↑</span>
                  <span className="work-stat-label">Task Completion</span>
                </div>
                <div className="work-stat">
                  <span className="work-stat-number">1000s</span>
                  <span className="work-stat-label">Data Combinations</span>
                </div>
                <div className="work-stat">
                  <span className="work-stat-number">65%</span>
                  <span className="work-stat-label">of Team's Roadmap</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="work-card">
            <div className="work-card-image">
              <div className="work-card-img-wrapper">
                <img src="assets/Roaming 1.png" alt="Roaming Insights" className="work-card-img" />
              </div>
            </div>
            <div className="work-card-content">
              <div className="work-card-tags">
                <span className="tag">Roaming Intelligence</span>
                <span className="tag">MVP to Scale</span>
                <span className="tag">IA</span>
              </div>
              <h3 className="work-card-title">Roaming Insights — Turning Big Data into Million Dollar Leverage</h3>
              <p className="work-card-description">To offset soaring B2B authentication costs by delivering unprecedented competitive visibility to telecom partners, I designed Meta's first 0-to-1 roaming intelligence platform. I overhauled its information architecture and utilized real usage data to scale a 3-month MVP into a multi-level analytics suite.</p>
              <div className="work-card-stats">
                <div className="work-stat">
                  <span className="work-stat-number">75%</span>
                  <span className="work-stat-label">Adoption Rate</span>
                </div>
                <div className="work-stat">
                  <span className="work-stat-number">€24M+</span>
                  <span className="work-stat-label">Partner Savings</span>
                </div>
                <div className="work-stat">
                  <span className="work-stat-number">New</span>
                  <span className="work-stat-label">Industry KPI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
