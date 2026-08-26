import { CaseStudyLayout } from './CaseStudyLayout';
import { backToWorkSection } from './backToWorkSection';

export function CaseStudyGenAI() {
  return (
    <CaseStudyLayout title="Case Study — GenAI for Filtering">

      {/* ========== HERO ========== */}
      <header className="cs-hero">
        <div className="section-container">
          <a href="#/" className="back-link" onClick={backToWorkSection}>← Back to Work</a>
          <div className="case-study-tags">
            <span className="tag">GenAI</span>
            <span className="tag">Enterprise B2B</span>
            <span className="tag">Product Design</span>
            <span className="tag">0 → 1</span>
          </div>
          <h1 className="cs-hero-title">GenAI for Filtering</h1>
          <p className="cs-hero-subtitle">Designing the Future of Data Exploration</p>
          <p className="cs-hero-intro">Proactively led the design of Meta's first GenAI-powered feature in the Actionable Insights portal—a natural language querying system that enabled telecom partners to explore complex network and market data conversationally.</p>
        </div>
      </header>

      {/* ========== META BAR ========== */}
      <div className="cs-meta-bar">
        <div className="section-container">
          <div className="cs-meta-grid">
            <div className="cs-meta-item">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">Lead Product Designer</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Team</span>
              <span className="cs-meta-value">PM, 3 Engineers, Content Designer, Data Scientist, 3 AMs</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Product</span>
              <span className="cs-meta-value">Actionable Insights — Meta's B2B platform for Telecom Partners</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Impact</span>
              <span className="cs-meta-value">AI quality: 49% → 85%</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========== HERO IMAGE (full-bleed) ========== */}
      <div className="cs-image-fullbleed">
        <img src="assets/9o.png" alt="GenAI Filtering Panel on Maps Interface" className="cs-hero-img cs-genai-hero-image" />
      </div>

      {/* ========== CONTEXT + CHALLENGE (side-by-side) ========== */}
      <section className="cs-section cs-bg-base">
        <div className="section-container">
          <div className="cs-two-col">
            <div className="cs-col">
              <span className="cs-section-label">Background</span>
              <h2>Context</h2>
              <p>Meta's Actionable Insights platform serves the world's largest Telecom operators, providing connectivity data across network performance, market share, and device adoption.</p>
              <p>Partners use this data to make million-dollar infrastructure investment decisions. Users range from executive leadership to specialized teams in network planning, market analysis, and data intelligence.</p>
            </div>
            <div className="cs-col">
              <span className="cs-section-label">Problem Space</span>
              <h2>The Challenge</h2>
              <p>The existing cascading dropdown filters made it difficult for users to filter and retrieve specific data combinations, hindering product adoption and limiting business value.</p>
              <ul className="cs-list">
                <li><strong>Expertise Required:</strong> Users needed deep knowledge to compose valid filter combinations across hundreds of metrics.</li>
                <li><strong>Siloed Data:</strong> Impossible to create cross-domain filters (Network + Market) or comparative queries.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OPPORTUNITY (centered callout) ========== */}
      <section className="cs-section cs-bg-elevated cs-callout-section">
        <div className="section-container">
          <div className="cs-callout">
            <span className="cs-section-label">The Opportunity</span>
            <h2>Natural language as a new paradigm for data exploration</h2>
            <p>Large Language Models offered a paradigm shift: natural language as a new mode of interaction that could overcome the limitations of traditional UX filter patterns while enabling entirely new analytical capabilities — allowing users to express their filtering intent more intuitively and flexibly.</p>
          </div>
        </div>
      </section>

      {/* ========== BEFORE/AFTER IMAGE ========== */}
      <div className="cs-image-fullbleed">
        <div className="cs-before-after">
          <div className="cs-before-after-item">
            <span className="cs-before-after-label">Before — Cascading Dropdowns</span>
            <img src="assets/Manual filters.png" alt="Cascading Dropdowns" className="cs-before-after-img" />
          </div>
          <div className="cs-before-after-item">
            <span className="cs-before-after-label">After — Natural Language Panel</span>
            <img src="assets/13o.png" alt="Natural Language Panel" className="cs-before-after-img" />
          </div>
        </div>
      </div>

      {/* ========== FROM CONCEPT TO LAUNCH ========== */}
      <section className="cs-section cs-bg-alt">
        <div className="section-container">
          <div className="cs-section-header-centered">
            <span className="cs-section-label">Journey</span>
            <h2>From Concept to Launch</h2>
          </div>
          <div className="cs-phases">
            <div className="cs-phase-card">
              <div className="cs-phase-indicator">
                <span className="cs-phase-num">01</span>
                <div className="cs-phase-line"></div>
              </div>
              <div className="cs-phase-content">
                <h3>Proof of Concept</h3>
                <p>We hacked together a demo showing it was possible to leverage LLMs to convert natural language into structured data queries rendered on a map. We presented the POC during All Hands, generating great excitement and prioritizing its implementation.</p>
              </div>
            </div>
            <div className="cs-phase-card">
              <div className="cs-phase-indicator">
                <span className="cs-phase-num">02</span>
              </div>
              <div className="cs-phase-content">
                <h3>Pilot & Launch</h3>
                <p>We integrated a GenAI filtering panel into the existing Maps interface — the product's most frequently used surface. After testing with 3 pilot partners and meeting our initial goals, we successfully launched the feature.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== THE SOLUTION (text + positioning list, NO image) ========== */}
      <section className="cs-section cs-bg-base">
        <div className="section-container">
          <div className="cs-two-col cs-two-col-wide">
            <div className="cs-col">
              <span className="cs-section-label">The Solution</span>
              <h2>GenAI Filtering Panel</h2>
              <p>We built an MVP of a GenAI-powered filtering panel using Llama 3.3, allowing users to filter the map using natural language, and tested it with 3 pilot partners.</p>
            </div>
            <div className="cs-col">
              <div className="cs-positioning-list">
                <div className="cs-positioning-item">
                  <span className="cs-positioning-icon">→</span>
                  <div>
                    <strong>Rapid Prototyping</strong>
                    <p>Prototyping in Figma Make allowed us to iterate fast, brainstorm in real-time, and get designs into production much faster</p>
                  </div>
                </div>
                <div className="cs-positioning-item">
                  <span className="cs-positioning-icon">→</span>
                  <div>
                    <strong>Design × Engineering</strong>
                    <p>I worked alongside the engineering team, vibe coding production changes to level up the quality of the final experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs-solution-image-grid">
            <img src="assets/1b.jpg" alt="GenAI filtering panel interface" className="cs-inline-img" />
            <img src="assets/11.png" alt="GenAI filtering panel interaction" className="cs-inline-img" />
            <img src="assets/7b.jpg" alt="GenAI filtering panel results" className="cs-inline-img" />
          </div>
        </div>
      </section>

      {/* ========== RESEARCH ========== */}
      <section className="cs-section cs-bg-alt">
        <div className="section-container">
          <div className="cs-section-header-centered">
            <span className="cs-section-label">Validation</span>
            <h2>Research & Discovery</h2>
            <p>We conducted early testing with 3 pilot partners using an initial prototype, which I helped build through vibe coding. We also leveraged AI to run critiques.</p>
          </div>
          <div className="cs-research-grid">
            <div className="cs-research-card cs-research-methods">
              <h4>Methods</h4>
              <ul className="cs-list cs-list-compact">
                <li>Partner interviews</li>
                <li>Dogfooding sessions (testing with real data)</li>
                <li>Prompt evaluation audits (scoring for response quality)</li>
                <li>AI critique</li>
              </ul>
            </div>
            <div className="cs-research-card cs-research-insight">
              <div className="cs-insight-icon">!</div>
              <h4>Mental Model Mismatch</h4>
              <p>Users struggled to understand AI capabilities and limitations, as results varied based on partner-specific data availability and user permissions.</p>
            </div>
            <div className="cs-research-card cs-research-insight">
              <div className="cs-insight-icon">!</div>
              <h4>Trust Through Transparency</h4>
              <p>Partners expected to see exactly how the AI interpreted their question before trusting the results.</p>
            </div>
            <div className="cs-research-card cs-research-insight">
              <div className="cs-insight-icon">!</div>
              <h4>Complex Requests</h4>
              <p>Users submitted prompts that exceeded the product's capabilities, resulting in confusion and negative feedback.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== DESIGN PRINCIPLES ========== */}
      <section className="cs-section cs-bg-elevated">
        <div className="section-container">
          <div className="cs-section-header-centered">
            <span className="cs-section-label">Optimizing the Experience</span>
            <h2>Design Principles</h2>
            <p>Based on the research findings, we defined three design principles and crafted an experience to support them.</p>
          </div>
          <div className="cs-principles cs-principles--row">
            <div className="cs-principle">
              <div className="cs-principle-num">01</div>
              <h4>Trust</h4>
              <ul className="cs-list cs-list-compact">
                <li><strong>Make AI reasoning visible</strong> by showing how results were generated and what actions were taken.</li>
                <li><strong>Clarify before making assumptions</strong> by asking follow-up questions when requests are ambiguous.</li>
                <li><strong>Provide clear outcomes</strong> with concise summaries, transparent fallbacks, and actionable error messages.</li>
              </ul>
            </div>
            <div className="cs-principle">
              <div className="cs-principle-num">02</div>
              <h4>Flexibility</h4>
              <ul className="cs-list cs-list-compact">
                <li><strong>Support natural conversations</strong> without limiting users to predefined workflows or commands.</li>
                <li><strong>Handle complexity</strong> by accommodating advanced questions and unexpected edge cases.</li>
                <li><strong>Adapt to user needs</strong> so results can evolve with different goals and contexts.</li>
              </ul>
            </div>
            <div className="cs-principle">
              <div className="cs-principle-num">03</div>
              <h4>Control</h4>
              <ul className="cs-list cs-list-compact">
                <li><strong>Keep users in charge</strong> by treating AI as a collaborator, not the decision-maker.</li>
                <li><strong>Ask instead of guessing</strong> whenever the user's intent is unclear.</li>
                <li><strong>Enable refinement</strong> by allowing users to edit, customize, and iterate on AI-generated results.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== KEY DESIGN DECISIONS (alternating — text/media sides swap each row) ========== */}
      <section className="cs-section cs-bg-base cs-decisions-section">
        <div className="section-container">
          <div className="cs-section-header-centered">
            <span className="cs-section-label">Deep Dive</span>
            <h2>Key Design Decisions</h2>
          </div>
        </div>

        {/* Decision 1 */}
        <div className="cs-decision">
          <div className="section-container">
            <div className="cs-two-col cs-two-col-media">
              <div className="cs-col">
                <span className="cs-decision-num">01</span>
                <h3>Discovering the Feature</h3>
                <p>A NUX and tutorial draw attention to the entry point for first-time users. After agreeing to terms of service, the AI panel remains open by default. Suggested prompts provide tailored examples, and a "What I can help with" link explains available functionality. An additional entry point in the manual filters prompts: "Need advanced filters? Use AI."</p>
              </div>
              <div className="cs-col cs-col-media">
                <video src="assets/GenAI - Tutorial.mp4" className="cs-inline-img" autoPlay loop muted playsInline />
              </div>
            </div>
          </div>
        </div>

        {/* Decision 2 */}
        <div className="cs-decision">
          <div className="section-container">
            <div className="cs-two-col cs-two-col-media">
              <div className="cs-col">
                <span className="cs-decision-num">02</span>
                <h3>Transparent AI Processing</h3>
                <p>Once a user prompts the AI, a rotating carousel shows the processing steps — giving users feedback on what's happening during loading. Once results arrive, steps collapse into "reasoning," allowing users to verify that the AI searched through the right things.</p>
              </div>
              <div className="cs-col cs-col-media">
                <video src="assets/GenAI - Carrousel.mp4" className="cs-inline-img cs-img-constrained cs-img-lg" autoPlay loop muted playsInline />
              </div>
            </div>
          </div>
        </div>

        {/* Decision 3 */}
        <div className="cs-decision">
          <div className="section-container">
            <div className="cs-two-col cs-two-col-media">
              <div className="cs-col">
                <span className="cs-decision-num">03</span>
                <h3>Showing Results</h3>
                <p>The map automatically renders with AI-applied filters. The AI panel displays a summary and specific filter tokens, showing exactly which parameters were applied. If the AI can't produce results, we surface the reason clearly.</p>
              </div>
              <div className="cs-col cs-col-media">
                <video src="assets/GenAI - Showing results.mp4" className="cs-inline-img cs-img-constrained" autoPlay loop muted playsInline />
              </div>
            </div>
          </div>
        </div>

        {/* Decision 4 */}
        <div className="cs-decision">
          <div className="section-container">
            <div className="cs-two-col cs-two-col-media">
              <div className="cs-col">
                <span className="cs-decision-num">04</span>
                <h3>Displaying Any Metric</h3>
                <p>A flexible pattern that works at two levels of complexity:</p>
                <ul className="cs-list cs-list-compact">
                  <li><strong>Resolving a question</strong> to an existing metric.</li>
                  <li><strong>Composing a brand-new metric</strong> when nothing quite fits.</li>
                </ul>
                <p>Either way, the formula is laid out in plain language and every threshold stays editable — so users can see exactly how the AI understood them, and adjust it without starting the prompt over.</p>
                <p>Hovering any token opens its full definition, keeping that detail one step away instead of crowding the panel.</p>
              </div>
              <div className="cs-col cs-col-media">
                <div className="cs-image-pair">
                  <img src="assets/Panel new 1.png" alt="Explore Maps with AI — download speed filtering criteria" />
                  <div className="cs-image-tooltip-trigger">
                    <img src="assets/Panel new 2.png" alt="Explore Maps with AI — custom derived metric with metric definition and filtering criteria" />
                    <div className="cs-image-tooltip">
                      <img src="assets/22.png" alt="Filter token details" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decision 5 */}
        <div className="cs-decision">
          <div className="section-container">
            <div className="cs-two-col cs-two-col-media">
              <div className="cs-col">
                <span className="cs-decision-num">05</span>
                <h3>Interoperability with Manual Filters</h3>
                <p>The AI's functionality exceeds manual filters. Only one panel is open at a time. The map indicates when AI filters are in use vs. manual. Warning messages ensure users understand that manual filters will override AI results.</p>
              </div>
              <div className="cs-col cs-col-media">
                <video src="assets/GenAI - Interoperability.mp4" className="cs-inline-img cs-img-constrained" autoPlay loop muted playsInline />
              </div>
            </div>
          </div>
        </div>

        {/* Decision 6 */}
        <div className="cs-decision">
          <div className="section-container">
            <div className="cs-two-col cs-two-col-media">
              <div className="cs-col">
                <span className="cs-decision-num">06</span>
                <h3>Actions & Feedback</h3>
                <p>Contextual actions to download and share results help drive engagement. Every AI response includes thumbs up/down feedback to capture quality data, plus a modal for detailed input.</p>
              </div>
              <div className="cs-col cs-col-media">
                <video src="assets/GenAI - Actions.mp4" className="cs-inline-img cs-img-constrained cs-img-lg" autoPlay loop muted playsInline />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== AI INNOVATION (comparison) ========== */}
      <section className="cs-section cs-bg-elevated">
        <div className="section-container">
          <div className="cs-two-col cs-two-col-wide">
            <div className="cs-col">
              <span className="cs-section-label">Capabilities Unlocked</span>
              <h2>AI-Driven Innovation</h2>
              <p>GenAI enabled real-time complex data synthesis — capabilities previously impossible without manual intervention.</p>
            </div>
            <div className="cs-col">
              <div className="cs-comparison">
                <div className="cs-comparison-head">
                  <span>Capability</span>
                  <span>Without AI</span>
                  <span>With AI</span>
                </div>
                <div className="cs-comparison-row">
                  <span>Derived metrics</span>
                  <span>Manual export + spreadsheet</span>
                  <span className="cs-ai-badge">One sentence</span>
                </div>
                <div className="cs-comparison-row">
                  <span>Cross-domain queries</span>
                  <span>Navigate separate pages</span>
                  <span className="cs-ai-badge">One sentence</span>
                </div>
                <div className="cs-comparison-row">
                  <span>Competitor comparisons</span>
                  <span>Side-by-side manual</span>
                  <span className="cs-ai-badge">One sentence</span>
                </div>
                <div className="cs-comparison-row">
                  <span>Complex multi-filter</span>
                  <span>6+ dropdown selections</span>
                  <span className="cs-ai-badge">One sentence</span>
                </div>
                <div className="cs-comparison-row">
                  <span>Temporal analysis</span>
                  <span>Date picker + reapply</span>
                  <span className="cs-ai-badge">One sentence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PRODUCT POSITIONING (callout + list) ========== */}
      <section className="cs-section cs-bg-accent-subtle">
        <div className="section-container">
          <div className="cs-two-col cs-two-col-wide">
            <div className="cs-col">
              <span className="cs-section-label">Strategy</span>
              <h2>Product Positioning</h2>
              <p>Rather than embedding GenAI as "just another filter," we created a distinct panel with its own entry point. This was a deliberate strategic choice.</p>
            </div>
            <div className="cs-col">
              <div className="cs-positioning-list">
                <div className="cs-positioning-item">
                  <span className="cs-positioning-icon">→</span>
                  <div>
                    <strong>Avoids narrowing the mental model</strong>
                    <p>GenAI can do more than filter — derived metrics, comparisons, follow-ups</p>
                  </div>
                </div>
                <div className="cs-positioning-item">
                  <span className="cs-positioning-icon">→</span>
                  <div>
                    <strong>Creates room for capability expansion</strong>
                    <p>The panel can evolve into a full "Insights Assistant"</p>
                  </div>
                </div>
                <div className="cs-positioning-item">
                  <span className="cs-positioning-icon">→</span>
                  <div>
                    <strong>Sets clear expectations</strong>
                    <p>Users know when they're interacting with AI vs. manual controls</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== LONG TERM VISION ========== */}
      <section className="cs-section cs-bg-gradient cs-vision-section">
        <div className="section-container">
          <div className="cs-vision">
            <span className="cs-section-label">Looking Ahead</span>
            <h2>Long-Term Vision —<br />The Analytics Agent</h2>
            <p>The scope of this feature extends beyond filtration. The GenAI panel was designed as the foundation for a future <strong>Analytics Agent</strong> — an AI-powered assistant that can autonomously apply filters, generate visualizations, surface insights, and manipulate the product's interface on behalf of the user.</p>
          </div>
        </div>
        <div className="cs-image-fullbleed">
          <img src="assets/26.png" alt="Long-Term Vision — Analytics Agent Concept" className="cs-hero-img cs-vision-image" />
        </div>
      </section>

      {/* ========== RESULTS ========== */}
      <section className="cs-section cs-bg-base cs-results-section">
        <div className="section-container">
          <div className="cs-section-header-centered">
            <span className="cs-section-label">Outcomes</span>
            <h2>Results & Impact</h2>
          </div>

          <div className="cs-results-hero">
            <div className="cs-result-big">
              <span className="cs-result-number">~89%</span>
              <span className="cs-result-label">Prompt Acceptance Rate</span>
              <p>Consistent top-tier accuracy ratings from power users</p>
            </div>
            <div className="cs-result-divider"></div>
            <div className="cs-result-big">
              <span className="cs-result-number">49→85%</span>
              <span className="cs-result-label">AI Response Quality</span>
              <p>40% improvement from pilot to launch across 3 continents</p>
            </div>
          </div>

          <div className="cs-impact-grid">
            <div className="cs-impact-card">
              <span className="cs-impact-badge">0 → 1</span>
              <p>First application of AI to generate insights in the product</p>
            </div>
            <div className="cs-impact-card">
              <span className="cs-impact-badge">AI-UI</span>
              <p>AI manipulates the product's actual interface — maps, filters, visualizations — setting the foundation for an agentic future</p>
            </div>
            <div className="cs-impact-card">
              <span className="cs-impact-badge">Strategy</span>
              <p>Findings became the foundation for the AI Portal Vision, directly informing creation of a new AI workstream</p>
            </div>
            <div className="cs-impact-card">
              <span className="cs-impact-badge">System</span>
              <p>Established reusable GenAI patterns now adopted across the product, plus validation processes and prompt guides</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BOTTOM NAV ========== */}
      <div className="cs-bottom-nav">
        <div className="section-container">
          <div className="cs-bottom-nav-inner">
            <a href="#/" className="btn btn-secondary" onClick={backToWorkSection}>← Back to Work</a>
          </div>
        </div>
      </div>
    </CaseStudyLayout>
  );
}
