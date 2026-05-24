export function PastWork() {
  return (
    <section className="past-work" id="past-work">
      <div className="section-container">
        <div className="section-header">
          <p className="section-label">Earlier Projects</p>
          <h2 className="section-title">Past Work</h2>
          <p className="section-subtitle">Selected projects from earlier in my career that shaped my design philosophy.</p>
        </div>

        <div className="past-work-grid">
          <div className="past-work-card">
            <div className="past-work-image">
              <div className="past-work-gif-wrapper">
                <video src="assets/Gif Xcaret.mp4" className="past-work-gif-img" autoPlay loop muted playsInline />
              </div>
            </div>
            <div className="past-work-content">
              <div className="work-card-tags">
                <span className="tag">Conversational UX</span>
                <span className="tag">AI Assistant</span>
                <span className="tag">Messenger</span>
              </div>
              <h3>Conversational UX for Assisted Sales</h3>
              <p>Designed an AI-assisted sales experience within Messenger for Xcaret Group. User research revealed <strong className="gradient-text">~70% of users</strong> had purchase intent but were dropping off. Proposed a semi-automated purchase flow that opened a new acquisition channel, prevented churn, and led to payment gateway integration.</p>
            </div>
          </div>
          <div className="past-work-card">
            <div className="past-work-image">
              <div className="past-work-gif-wrapper">
                <img src="assets/EPDH2.PNG" alt="E-Commerce Checkout Optimization" className="past-work-gif-img" />
              </div>
            </div>
            <div className="past-work-content">
              <div className="work-card-tags">
                <span className="tag">E-Commerce</span>
                <span className="tag">UX Design</span>
                <span className="tag">Conversion</span>
              </div>
              <h3>E-Commerce Checkout Optimization</h3>
              <p>Streamlined the online store's checkout experience using e-commerce best practices and UX improvements, driving a <strong className="gradient-text">200% increase</strong> in purchase conversion rates during the initial months post-launch.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
