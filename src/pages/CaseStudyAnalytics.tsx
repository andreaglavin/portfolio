import { CaseStudyLayout } from './CaseStudyLayout';

export function CaseStudyAnalytics() {
  return (
    <CaseStudyLayout title="Case Study — Design System | Ricardo">
      <header className="case-study-hero">
        <div className="section-container">
          <a href="#/" className="back-link">← Back to Work</a>
          <div className="case-study-tags">
            <span className="tag">Design Systems</span>
            <span className="tag">Enterprise</span>
          </div>
          <h1 className="case-study-title">Building a Scalable Design System from Scratch</h1>
          <p className="case-study-intro">Architected and shipped a comprehensive design system serving 200+ designers and engineers, establishing consistent design language across multiple product surfaces and reducing design debt by 60%.</p>
          <div className="case-study-meta">
            <div className="case-study-meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">Design Systems Lead</span>
            </div>
            <div className="case-study-meta-item">
              <span className="meta-label">Team</span>
              <span className="meta-value">4 Designers, 6 Engineers</span>
            </div>
            <div className="case-study-meta-item">
              <span className="meta-label">Timeline</span>
              <span className="meta-value">12 Months</span>
            </div>
            <div className="case-study-meta-item">
              <span className="meta-label">Scope</span>
              <span className="meta-value">Cross-platform</span>
            </div>
          </div>
        </div>
      </header>

      <div className="case-study-image-full">
        <div className="case-study-placeholder">
          <span>Hero Image — Design System Overview</span>
        </div>
      </div>

      <div className="section-container">
        <div className="case-study-body">

          <section className="case-study-section">
            <h2>The Challenge</h2>
            <p>Content coming soon. This section will detail the fragmentation across products, inconsistency in patterns, and the need for a unified design language.</p>
          </section>

          <section className="case-study-section">
            <h2>Audit & Strategy</h2>
            <p>Content coming soon. This section will cover the component audit, token strategy, and adoption plan.</p>
          </section>

          <div className="case-study-image-block">
            <div className="case-study-placeholder">
              <span>Component Audit / Token Architecture</span>
            </div>
          </div>

          <section className="case-study-section">
            <h2>Design & Build</h2>
            <p>Content coming soon. This section will showcase the component library, documentation, and the design-to-code workflow.</p>
          </section>

          <div className="case-study-image-block">
            <div className="case-study-placeholder">
              <span>Component Library / Documentation</span>
            </div>
          </div>

          <section className="case-study-section">
            <h2>Results & Impact</h2>
            <div className="case-study-results">
              <div className="result-card">
                <span className="result-number">200+</span>
                <span className="result-label">Team Members Using It</span>
              </div>
              <div className="result-card">
                <span className="result-number">-60%</span>
                <span className="result-label">Design Debt</span>
              </div>
              <div className="result-card">
                <span className="result-number">3x</span>
                <span className="result-label">Faster Shipping</span>
              </div>
            </div>
            <p>Content coming soon. This section will detail adoption metrics, efficiency gains, and team feedback.</p>
          </section>

          <section className="case-study-section">
            <h2>Key Learnings</h2>
            <p>Content coming soon. This section will share reflections on building and scaling a design system.</p>
          </section>

        </div>
      </div>

      <div className="case-study-nav">
        <div className="section-container">
          <div className="case-study-nav-inner">
            <a href="#/case-study-1" className="btn btn-secondary">← Previous Project</a>
          </div>
        </div>
      </div>
    </CaseStudyLayout>
  );
}
