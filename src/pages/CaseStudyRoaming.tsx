import { CaseStudyLayout } from './CaseStudyLayout';

export function CaseStudyRoaming() {
  return (
    <CaseStudyLayout title="Case Study — Accessible Onboarding | Ricardo">
      <header className="case-study-hero">
        <div className="section-container">
          <a href="#/" className="back-link">← Back to Work</a>
          <div className="case-study-tags">
            <span className="tag">UX Research</span>
            <span className="tag">Accessibility</span>
            <span className="tag">Mobile</span>
          </div>
          <h1 className="case-study-title">Accessible Onboarding That Converts</h1>
          <p className="case-study-intro">Redesigned the onboarding experience with a focus on accessibility and inclusivity, resulting in significantly higher completion rates and earning recognition for WCAG AA+ compliance across all flows.</p>
          <div className="case-study-meta">
            <div className="case-study-meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">Senior Product Designer</span>
            </div>
            <div className="case-study-meta-item">
              <span className="meta-label">Team</span>
              <span className="meta-value">1 Designer, 5 Engineers, 1 Researcher</span>
            </div>
            <div className="case-study-meta-item">
              <span className="meta-label">Timeline</span>
              <span className="meta-value">4 Months</span>
            </div>
            <div className="case-study-meta-item">
              <span className="meta-label">Platform</span>
              <span className="meta-value">iOS, Android & Web</span>
            </div>
          </div>
        </div>
      </header>

      <div className="case-study-image-full">
        <div className="case-study-placeholder">
          <span>Hero Image — Onboarding Flow Overview</span>
        </div>
      </div>

      <div className="section-container">
        <div className="case-study-body">

          <section className="case-study-section">
            <h2>The Challenge</h2>
            <p>Content coming soon. This section will detail the accessibility gaps, drop-off patterns, and the mandate for inclusive design across all onboarding flows.</p>
          </section>

          <section className="case-study-section">
            <h2>Research & Accessibility Audit</h2>
            <p>Content coming soon. This section will cover accessibility audits, assistive technology testing, and user interviews with diverse ability groups.</p>
          </section>

          <div className="case-study-image-block">
            <div className="case-study-placeholder">
              <span>Accessibility Audit / User Testing Sessions</span>
            </div>
          </div>

          <section className="case-study-section">
            <h2>Design Process</h2>
            <p>Content coming soon. This section will showcase the inclusive design patterns, progressive disclosure approach, and iterative testing with screen readers and assistive devices.</p>
          </section>

          <div className="case-study-image-block">
            <div className="case-study-placeholder">
              <span>Design Iterations / Accessibility Patterns</span>
            </div>
          </div>

          <section className="case-study-section">
            <h2>Final Design</h2>
            <p>Content coming soon. This section will present the final accessible onboarding flow with detailed interaction patterns and WCAG compliance details.</p>
          </section>

          <div className="case-study-image-block">
            <div className="case-study-placeholder">
              <span>Final Design Screens</span>
            </div>
          </div>

          <section className="case-study-section">
            <h2>Results & Impact</h2>
            <div className="case-study-results">
              <div className="result-card">
                <span className="result-number">+52%</span>
                <span className="result-label">Completion Rate</span>
              </div>
              <div className="result-card">
                <span className="result-number">AA+</span>
                <span className="result-label">WCAG Compliance</span>
              </div>
              <div className="result-card">
                <span className="result-number">4.8★</span>
                <span className="result-label">App Store Rating</span>
              </div>
            </div>
            <p>Content coming soon. This section will detail the measurable impact on completion rates, accessibility scores, and user satisfaction.</p>
          </section>

          <section className="case-study-section">
            <h2>Key Learnings</h2>
            <p>Content coming soon. This section will share insights on building accessible experiences that also drive business metrics.</p>
          </section>

        </div>
      </div>

      <div className="case-study-nav">
        <div className="section-container">
          <div className="case-study-nav-inner">
            <a href="#/case-study-2" className="btn btn-secondary">← Previous Project</a>
            <a href="#/" className="btn btn-primary">Back to Work →</a>
          </div>
        </div>
      </div>
    </CaseStudyLayout>
  );
}
