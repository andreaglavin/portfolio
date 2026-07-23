import { useRef, useState } from 'react';
import { CaseStudyLayout } from './CaseStudyLayout';
import { backToWorkSection } from './backToWorkSection';

export function CaseStudyAnalytics() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  };

  return (
    <CaseStudyLayout title="Case Study — From Reporting to Action">

      {/* ========== HERO ========== */}
      <header className="cs-hero">
        <div className="section-container">
          <a href="#/" className="back-link" onClick={backToWorkSection}>← Back to Work</a>
          <div className="case-study-tags">
            <span className="tag">Product Strategy</span>
            <span className="tag">Enterprise B2B</span>
            <span className="tag">0 → 1</span>
            <span className="tag">Data Analytics</span>
          </div>
          <h1 className="cs-hero-title">From Reporting to Action</h1>
          <p className="cs-hero-subtitle">Redesigning the Analytics Suite as a Decision-Support Engine</p>
          <p className="cs-hero-intro">The product strategy shifted from data analysis to actionability — helping Partners grow revenue and reduce costs. I shaped the new strategic pillar, the Actionability Framework, and the end-to-end Opportunities experience across two delivery phases.</p>
        </div>
      </header>

      {/* ========== META BAR ========== */}
      <div className="cs-meta-bar">
        <div className="section-container">
          <div className="cs-meta-grid">
            <div className="cs-meta-item">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">Senior Product Designer — Suite Lead</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Team</span>
              <span className="cs-meta-value">2 PMs, Content Designer, 4+ vertical teams, ~7 Engineers, XFN (PAS, PMM, Data)</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Product</span>
              <span className="cs-meta-value">Actionable Insights — Meta's B2B platform for Telecom Partners</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Impact</span>
              <span className="cs-meta-value">65% of H2 '25 roadmap · $104M partner value unlocked</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========== HERO IMAGE ========== */}
      <div className="cs-image-fullbleed">
        <img src="assets/Opportunities.png" alt="Opportunities surfaced inside the Global Dashboards Home/Overview tab" className="cs-hero-img" />
      </div>

      {/* ========== PROJECT OVERVIEW (narrative + definition callout) ========== */}
      <section className="cs-section cs-bg-base">
        <div className="section-container">
          <div className="cs-narrative">
            <span className="cs-section-label">Project Overview</span>
            <h2>When the product strategy changed</h2>
            <p>The product strategy shifted to focus on helping Partners grow revenue and reduce costs. After several workshops and design sprints, we aligned that increasing product actionability was a key way to achieve this.</p>
          </div>

          <div className="cs-definition">
            <span className="cs-definition-label">How we defined actionability</span>
            <p>Users' ability to use our product to make impactful business decisions that grow revenue and/or reduce costs — partners integrate our insights into their business process, learn something new from them, and take an action that can be attributed back to those insights.</p>
          </div>

          <div className="cs-narrative">
            <p>Our product was primarily oriented toward data analysis and required partners to draw their own conclusions. We could drive more action by shifting the focus to helping users easily identify business opportunities in the product.</p>
          </div>
        </div>
      </section>

      {/* ========== ACTIONABILITY FRAMEWORK (funnel) ========== */}
      <section className="cs-section cs-bg-alt">
        <div className="section-container">
          <div className="cs-section-header-centered">
            <span className="cs-section-label">The Framework</span>
            <h2>Actionability framework</h2>
            <p>We researched with Partners and defined the actionability framework: Partners want to use the Analytics product to understand their data, identify opportunities, and execute actions. By proactively helping partners identify business opportunities we can drive greater actionability in the product.</p>
          </div>

          <div className="cs-funnel">
            <div className="cs-funnel-row">
              <div className="cs-funnel-tier">
                <h3>Understand data</h3>
                <p>"How am I doing?"</p>
                <span className="cs-funnel-note cs-funnel-note--left">Focus of our product today</span>
              </div>
            </div>
            <div className="cs-funnel-row">
              <div className="cs-funnel-tier cs-funnel-tier--highlight">
                <h3>★ Identify opportunities</h3>
                <p>"What should I focus on next?"</p>
                <span className="cs-funnel-note cs-funnel-note--right">We can drive more actionability by focusing here</span>
              </div>
            </div>
            <div className="cs-funnel-row">
              <div className="cs-funnel-tier">
                <h3>Execute action</h3>
                <p>"What can I do about it?"</p>
              </div>
            </div>
          </div>

          <div className="cs-funnel-footer">
            <p>We defined two ways to help Partners identify opportunities: provide them directly (<strong>Meta-provided Opportunities</strong>) and enable them to define their own (<strong>Partner-derived Opportunities</strong>) — the basis for the two delivery phases of this project.</p>
          </div>
        </div>
      </section>

      {/* ========== OPPORTUNITIES DEFINITION (callout + 5 characteristics) ========== */}
      <section className="cs-section cs-bg-elevated cs-callout-section">
        <div className="section-container">
          <div className="cs-callout">
            <span className="cs-section-label">Opportunities Definition</span>
            <h2>"An opportunity is a data-backed insight that partners can take action on."</h2>
            <p>To align all teams and define the new experience, we established a clear understanding of what opportunities should look like — anchored in five characteristics.</p>
          </div>

          <div className="cs-characteristics">
            <div className="cs-characteristic">
              <span className="cs-characteristic-num">01</span>
              <h4>Impactful</h4>
              <p>Prioritized based on their business impact.</p>
            </div>
            <div className="cs-characteristic">
              <span className="cs-characteristic-num">02</span>
              <h4>Customized</h4>
              <p>Relevant to the specific goals of each user/partner.</p>
            </div>
            <div className="cs-characteristic">
              <span className="cs-characteristic-num">03</span>
              <h4>Execution-oriented</h4>
              <p>Include a clear path to action.</p>
            </div>
            <div className="cs-characteristic">
              <span className="cs-characteristic-num">04</span>
              <h4>Contextual</h4>
              <p>Provide clear context and explanation to support decision-making.</p>
            </div>
            <div className="cs-characteristic">
              <span className="cs-characteristic-num">05</span>
              <h4>Holistic</h4>
              <p>Take into account all data available to us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OPPORTUNITIES USER FLOW ========== */}
      <section className="cs-section cs-bg-base">
        <div className="section-container">
          <div className="cs-section-header-centered">
            <span className="cs-section-label">User Flow</span>
            <h2>Opportunities user flow</h2>
            <p>We defined the short- and long-term user flows, as well as the actions needed to measure success — from initiation through execution and monetary value.</p>
          </div>

          <div className="cs-flow-diagram">
            <div className="cs-flow-grid">

              {/* Initiation */}
              <div className="cs-flow-col">
                <div className="cs-flow-col-header">Initiation</div>
                <div className="cs-flow-col-body">
                  <div className="cs-flow-box">Meta-provided Opportunity</div>
                  <div className="cs-flow-box">Partner-derived Opportunity</div>
                </div>
              </div>

              <div className="cs-flow-col cs-flow-col--arrow">
                <div className="cs-flow-col-header cs-flow-col-header--empty">·</div>
                <div className="cs-flow-col-body">
                  <div className="cs-flow-arrow">→</div>
                </div>
              </div>

              {/* Identify Opportunity */}
              <div className="cs-flow-col">
                <div className="cs-flow-col-header">Identify Opportunity</div>
                <div className="cs-flow-col-body">
                  <div className="cs-flow-box">Opportunities in Dashboards</div>
                  <div className="cs-flow-box">Opportunities page</div>
                  <div className="cs-flow-box cs-flow-box--v2">Deeper analysis in Verticals surface</div>
                </div>
              </div>

              <div className="cs-flow-col cs-flow-col--arrow">
                <div className="cs-flow-col-header cs-flow-col-header--empty">·</div>
                <div className="cs-flow-col-body">
                  <div className="cs-flow-arrow">→</div>
                </div>
              </div>

              {/* Accept opportunity (transitional node) */}
              <div className="cs-flow-col cs-flow-col--accept">
                <div className="cs-flow-col-header cs-flow-col-header--empty">·</div>
                <div className="cs-flow-col-body">
                  <div className="cs-flow-box cs-flow-box--accept">Accept opportunity</div>
                </div>
              </div>

              <div className="cs-flow-col cs-flow-col--arrow">
                <div className="cs-flow-col-header cs-flow-col-header--empty">·</div>
                <div className="cs-flow-col-body">
                  <div className="cs-flow-arrow">→</div>
                </div>
              </div>

              {/* Execute action */}
              <div className="cs-flow-col">
                <div className="cs-flow-col-header">Execute action</div>
                <div className="cs-flow-col-body">
                  <div className="cs-flow-box">Save</div>
                  <div className="cs-flow-box">Share</div>
                  <div className="cs-flow-box">Download / Export</div>
                  <div className="cs-flow-box cs-flow-box--v2">Create Ads segment</div>
                </div>
              </div>

              <div className="cs-flow-col cs-flow-col--arrow">
                <div className="cs-flow-col-header cs-flow-col-header--empty">·</div>
                <div className="cs-flow-col-body">
                  <div className="cs-flow-arrow">→</div>
                </div>
              </div>

              {/* Monetary Value */}
              <div className="cs-flow-col">
                <div className="cs-flow-col-header">Monetary Value</div>
                <div className="cs-flow-col-body">
                  <div className="cs-flow-box cs-flow-box--v2">Network intervention</div>
                  <div className="cs-flow-box cs-flow-box--v2">Market offline campaign</div>
                  <div className="cs-flow-box cs-flow-box--v2">Market Ads campaign</div>
                </div>
              </div>

            </div>

            <div className="cs-flow-legend">
              <div className="cs-flow-legend-item">
                <span className="cs-flow-legend-swatch cs-flow-legend-swatch--mvp"></span>
                MVP scope
              </div>
              <div className="cs-flow-legend-item">
                <span className="cs-flow-legend-swatch cs-flow-legend-swatch--v2"></span>
                v2+ scope
              </div>
              <div className="cs-flow-legend-item">
                <span className="cs-flow-legend-swatch cs-flow-legend-swatch--accept"></span>
                Transition node
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ENTRY POINTS & ARCHETYPES ========== */}
      <section className="cs-section cs-bg-alt">
        <div className="section-container">
          <div className="cs-section-header-centered">
            <span className="cs-section-label">Surfaces & Users</span>
            <h2>Entry points and user archetypes</h2>
            <p>We defined the entry points and how they would connect to different user archetypes. Opportunities should be integrated and surfaced throughout the portal to create a seamless user experience.</p>
          </div>

          <div className="cs-archetypes">
            <div className="cs-archetypes-head"></div>
            <div className="cs-archetypes-head">Centralized</div>
            <div className="cs-archetypes-head">Embedded</div>
            <div className="cs-archetypes-head">Out of product</div>

            <div className="cs-archetypes-label">Entry points</div>
            <div className="cs-archetypes-cell">
              <span className="cs-archetype-chip">Opportunities page</span>
              <span className="cs-archetype-chip">Home page summary</span>
            </div>
            <div className="cs-archetypes-cell">
              <span className="cs-archetype-chip">Dashboards</span>
              <span className="cs-archetype-chip">Product pages</span>
              <span className="cs-archetype-chip">Notifications</span>
            </div>
            <div className="cs-archetypes-cell">
              <span className="cs-archetype-chip">Emails</span>
            </div>

            <div className="cs-archetypes-label">User archetype</div>
            <div className="cs-archetypes-cell">
              <span className="cs-archetype-chip">C-level executives</span>
              <span className="cs-archetype-chip">Decision makers</span>
            </div>
            <div className="cs-archetypes-cell">
              <span className="cs-archetype-chip">Analysts</span>
            </div>
            <div className="cs-archetypes-cell">
              <span className="cs-archetype-chip">C-level executives</span>
              <span className="cs-archetype-chip">Decision makers</span>
              <span className="cs-archetype-chip">Analysts</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PHASE 1 DIVIDER ========== */}
      <section className="cs-phase-divider">
        <div className="section-container">
          <span className="cs-phase-divider-eyebrow">Phase 1 — MVP</span>
          <span className="cs-phase-divider-num">01</span>
          <h2 className="cs-phase-divider-title">Meta-provided Opportunities</h2>
          <p className="cs-phase-divider-sub">Surfacing curated opportunities directly inside Dashboards — fast value, low build risk, executive-friendly.</p>
        </div>
      </section>

      {/* ========== PHASE 1 FEATURES ========== */}
      <section className="cs-bg-base cs-phase1-features">
        <div className="section-container">

          {/* Feature: Initial explorations */}
          <div className="cs-feature">
            <div className="cs-two-col cs-two-col-media">
              <div className="cs-col">
                <span className="cs-feature-eyebrow">01 — Initial Explorations</span>
                <h3>From a dedicated page to the landing page</h3>
                <p>We began exploring the consolidation of opportunities into a dedicated global page, but after weighing the pros and cons, we decided to pivot and surface opportunities on the landing page instead.</p>
                <p>This approach maximized traffic while reducing the MVP effort — partners couldn't miss the new surface, and we could ship faster.</p>
              </div>
              <div className="cs-col cs-col-media">
                <img src="assets/oppo1.png" alt="Initial exploration — dedicated Opportunities page concept" className="cs-inline-img" />
              </div>
            </div>
          </div>

          {/* Feature: Opportunities widget (image left) */}
          <div className="cs-feature">
            <div className="cs-two-col cs-two-col-media">
              <div className="cs-col cs-col-media">
                <img src="assets/Opportunities.png" alt="Opportunities widget on the Dashboards landing page" className="cs-inline-img" />
              </div>
              <div className="cs-col">
                <span className="cs-feature-eyebrow">02 — Opportunities Widget</span>
                <h3>Top 3 opportunities for each use case</h3>
                <p>We added a widget to the landing page featuring the top 3 opportunities for each use case, aiming to maximize exposure during the MVP release.</p>
                <p>We supported two initial use cases: Convergence and Video Experience. This involved collaborating with all cross-vertical teams to align on criteria and thresholds — creating the first experience where metrics from different product verticals were integrated.</p>
              </div>
            </div>
          </div>

          {/* Feature: Life-cycle */}
          <div className="cs-feature">
            <div className="cs-two-col cs-two-col-media">
              <div className="cs-col">
                <span className="cs-feature-eyebrow">03 — Opportunities Life-cycle</span>
                <h3>New and changed indications</h3>
                <p>We defined the life cycle of opportunities, including timeframes for updating them and mechanisms to draw user attention. Additionally, we established a notifications and email system to inform users.</p>
                <ul>
                  <li>Indicate new opportunities (compared to the previous week) with a purple pill</li>
                  <li>Indicate a significant change in metrics with the % change</li>
                </ul>
              </div>
              <div className="cs-col cs-col-media">
                <img src="assets/Prototype - opportunities 1.gif" alt="Opportunities widget prototype — new/changed indicators and actions menu" className="cs-inline-img cs-img-constrained" style={{ maxHeight: '572px' }} />
              </div>
            </div>
          </div>

          {/* Feature: Details page (image left) */}
          <div className="cs-feature">
            <div className="cs-two-col cs-two-col-media">
              <div className="cs-col cs-col-media">
                <img src="assets/Oppo3.png" alt="Opportunity details page (Figma Make prototype)" className="cs-inline-img" />
              </div>
              <div className="cs-col">
                <span className="cs-feature-eyebrow">04 — Opportunity Details Page</span>
                <h3>Context, reasoning, and competitive insights</h3>
                <p>We created a preview page that provides clear context and a holistic view of the reasons behind each opportunity, including the contributing factors and why Meta believes it is a good business opportunity. The page also offers additional competitive insights to encourage users to take action.</p>
                <p>We'll connect this workflow to the Market, Network, and Roaming surfaces so partners can:</p>
                <ul>
                  <li>View supporting data</li>
                  <li>Gain more confidence to take action</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature: Sharing, hiding, downloading */}
          <div className="cs-feature">
            <div className="cs-two-col cs-two-col-media">
              <div className="cs-col">
                <span className="cs-feature-eyebrow">05 — Sharing, Hiding, Downloading</span>
                <h3>Keeping suggestions relevant — and shareable</h3>
                <p>We added a feature that enables users to dismiss opportunities and view the next recommended one, ensuring suggestions remain relevant.</p>
                <p>We also added sharing functionality to promote collaboration across teams, as well as notifications and emails to foster engagement.</p>
              </div>
              <div className="cs-col cs-col-media">
                <div className="cs-image-cascade">
                  <img src="assets/oppo6.png" alt="Share opportunity modal" />
                  <img src="assets/Oppo7.png" alt="Hide opportunity modal with feedback options" />
                  <img src="assets/Oppo8.png" alt="Shared opportunity email notification" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========== PHASE 2 DIVIDER ========== */}
      <section className="cs-phase-divider">
        <div className="section-container">
          <span className="cs-phase-divider-eyebrow">Phase 2 — Scale</span>
          <span className="cs-phase-divider-num">02</span>
          <h2 className="cs-phase-divider-title">User-derived (custom) opportunities</h2>
          <p className="cs-phase-divider-sub">Building a new criteria engine that lets partners define their own opportunities across the entire suite.</p>
        </div>
      </section>

      {/* ========== PHASE 2 — NEW CRITERIA ENGINE NARRATIVE ========== */}
      <section className="cs-section cs-bg-base">
        <div className="section-container">
          <div className="cs-narrative">
            <span className="cs-section-label">Phase 2 — The Problem</span>
            <h2>A new criteria engine / filtering mechanism</h2>
            <p>The product's current filtering capabilities were insufficient, making it impossible for partners to define and apply criteria that would enable them to create business opportunities. The existing filters lacked the flexibility needed to accommodate each partner's unique business needs.</p>
            <p>We needed to create a complex mechanism that consolidates all datasets from the product, enabling users to define custom, free-form criteria (conditions/thresholds) that filter data. This would allow partners to identify high-priority areas and opportunities.</p>
          </div>

          <div className="cs-definition">
            <span className="cs-definition-label">The unlock</span>
            <p>This need led to the creation of the <strong>Criteria Engine</strong> — a foundational capability for making the product more actionable. By enabling partners to gain a global view of their data and filter down to only what matters, the Criteria Engine replaces prior spot-check workflows.</p>
          </div>
        </div>
      </section>

      {/* ========== CRITERIA ENGINE — capabilities ========== */}
      <section className="cs-section cs-bg-alt">
        <div className="section-container">
          <div className="cs-two-col cs-two-col-media cs-two-col-media--lg">
            <div className="cs-col">
              <span className="cs-section-label">The Solution</span>
              <h2>Criteria engine</h2>
              <p>Designed a system that expanded across the complete suite, enabling thousands of new data combinations — a complex cross-product system with varying data requirements and differences across products.</p>
              <p>Allows complex customizations and thousands of unique data combinations:</p>
              <ul className="cs-list">
                <li><strong>Boolean & arithmetic operations</strong></li>
                <li><strong>All metrics and metric cuts</strong></li>
                <li><strong>Metric performance options</strong></li>
                <li><strong>Competitor comparisons</strong></li>
                <li><strong>Ranges, percentages, absolute values</strong></li>
              </ul>
            </div>
            <div className="cs-col cs-col-media">
              <img src="assets/Oppo9.png" alt="Criteria Engine — Convergence preset showing a multi-row builder" className="cs-inline-img" />
            </div>
          </div>

          <div className="cs-img-grid-2">
            <figure className="cs-img-figure">
              <img src="assets/criteriaengine 7.png" alt="Criteria Engine — metric picker with Mobile and Broadband tabs" className="cs-inline-img" />
              <figcaption className="cs-img-caption">Choosing a metric across product categories</figcaption>
            </figure>
            <figure className="cs-img-figure">
              <img src="assets/criteriaengine 4.png" alt="Criteria Engine — custom builder with metric format options" className="cs-inline-img" />
              <figcaption className="cs-img-caption">Metric format and performance options</figcaption>
            </figure>
            <figure className="cs-img-figure">
              <img src="assets/criteriaengine 5.png" alt="Criteria Engine — network and competitor comparison options" className="cs-inline-img" />
              <figcaption className="cs-img-caption">Network and competitor comparisons</figcaption>
            </figure>
            <figure className="cs-img-figure">
              <img src="assets/criteriaengine 6.png" alt="Criteria Engine — range values for 'is between' comparison" className="cs-inline-img" />
              <figcaption className="cs-img-caption">Range values with “is between”</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ========== CRITERIA ENGINE — sentence builder visual ========== */}
      <section className="cs-section cs-bg-base">
        <div className="section-container">
          <div className="cs-section-header-centered">
            <span className="cs-section-label">How it composes</span>
            <h2>One coherent sentence, powered by complex logic</h2>
            <p>The Criteria Engine guides users through a consistent pattern — turning custom opportunity logic into a single readable expression.</p>
          </div>

          <div className="cs-sentence-builder">
            <span className="cs-sentence-chip">Metric + Cut</span>
            <span className="cs-sentence-connector">→</span>
            <span className="cs-sentence-chip">Comparison Context</span>
            <span className="cs-sentence-connector">→</span>
            <span className="cs-sentence-chip">Operator</span>
            <span className="cs-sentence-connector">→</span>
            <span className="cs-sentence-chip">Value Type</span>
            <span className="cs-sentence-connector">→</span>
            <span className="cs-sentence-chip">Threshold</span>
          </div>
          <p className="cs-sentence-caption">e.g. "Stall rate vs #1 competitor &gt; 20% in regions with &gt; 100k subs"</p>
        </div>
      </section>

      {/* ========== PROTOTYPE ========== */}
      <section className="cs-section cs-bg-alt">
        <div className="section-container">
          <div className="cs-section-header-centered">
            <span className="cs-section-label">Prototype</span>
            <h2>End-to-end Opportunities flow</h2>
            <p>Figma Make prototype of the Criteria Engine on the Opportunities page.</p>
          </div>
          <div className="cs-video-wrap">
            <video
              ref={videoRef}
              src="assets/CriteriaEngine-prototype-video.mp4"
              className="cs-hero-img"
              loop
              muted
              playsInline
              onClick={togglePlay}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            <button
              type="button"
              className={`cs-video-playbtn${isPlaying ? ' is-playing' : ''}`}
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5.5v13a1 1 0 0 0 1.55.83l10-6.5a1 1 0 0 0 0-1.66l-10-6.5A1 1 0 0 0 8 5.5z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* ========== COMBINED RESULTS — split by phase ========== */}
      <section className="cs-section cs-bg-base cs-results-section">
        <div className="section-container">
          <div className="cs-section-header-centered">
            <span className="cs-section-label">Outcomes</span>
            <h2>Results across both phases</h2>
            <p>Phase 1 established the strategic pillar and shipped the first cross-vertical use cases. Phase 2 turned the Criteria Engine into core infrastructure that extended far beyond Opportunities.</p>
          </div>

          <div className="cs-results-split">
            <div className="cs-results-phase">
              <span className="cs-results-phase-label">Phase 1 — MVP results</span>
              <h3>Meta-provided Opportunities</h3>
              <div className="cs-stat-highlight">
                <span className="cs-stat-highlight-num">65%</span>
                <span className="cs-stat-highlight-label">of the team's roadmap shifted to this new strategic track</span>
              </div>
              <ul>
                <li>Defined the new strategic pillar vision and actionability framework, shaping a new product track</li>
                <li>Featured in PG All Hands</li>
                <li>Defined the first two global cross-vertical use cases, setting the foundation for subsequent ones</li>
                <li>Achieved the task completion targets for the project</li>
              </ul>
            </div>
            <div className="cs-results-phase">
              <span className="cs-results-phase-label">Phase 2 — Criteria Engine results</span>
              <h3>User-derived Opportunities</h3>
              <div className="cs-stat-highlight">
                <span className="cs-stat-highlight-num">$104M</span>
                <span className="cs-stat-highlight-label">in partner value unlocked in 2025</span>
              </div>
              <ul>
                <li>The system became core infrastructure, powering Opportunities, API, Prioritization, and GenAI</li>
                <li>Impact extended beyond the Opportunities project, unlocking a long-awaited partner request: a self-serve API for custom in-product queries</li>
                <li>Streamlined the manual implementation of API queries, eliminating back-and-forth between teams and partners.</li>
              </ul>
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
