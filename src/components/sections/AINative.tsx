import {
  ChatGPTIcon,
  ClaudeIcon,
  CursorIcon,
  FigmaIcon,
  VsCodeIcon,
} from '@/components/icons/ToolIcons';

export function AINative() {
  return (
    <section className="ai-native" id="ai-native">
      <div className="section-container">
        <div className="section-header">
          <p className="section-label">Design Approach</p>
          <h2 className="section-title">AI-Native<br />Design Process</h2>
          <p className="section-subtitle">My <em>workflow</em> integrates AI at every stage, from research and ideation to prototyping and delivery, enabling faster iteration and deeper insight.</p>
        </div>

        <div className="ai-philosophy">
          <div className="ai-philosophy-card">
            <div className="ai-philosophy-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4m0 14v4M4.22 4.22l2.83 2.83m9.9 9.9l2.83 2.83M1 12h4m14 0h4M4.22 19.78l2.83-2.83m9.9-9.9l2.83-2.83" />
              </svg>
            </div>
            <h3>AI-Augmented Research</h3>
            <p>I use AI to synthesize user research, analyze data and competitors, identify patterns and pain points, and uncover opportunities.</p>
          </div>
          <div className="ai-philosophy-card">
            <div className="ai-philosophy-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
            </div>
            <h3>Rapid Prototyping</h3>
            <p>I use AI to rapidly explore design directions, build high-fidelity prototypes, and validate ideas faster.</p>
          </div>
          <div className="ai-philosophy-card">
            <div className="ai-philosophy-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3>Design-to-Code</h3>
            <p>I use AI to turn designs into working code, improve quality, reduce back-and-forth with engineering, and accelerate delivery from concept to production.</p>
          </div>
        </div>

        <div className="ai-tools">
          <h3 className="ai-tools-title">My AI Toolkit</h3>
          <div className="ai-tools-grid">
            <div className="ai-tool-item ai-tool-compact">
              <div className="ai-tool-icon"><FigmaIcon /></div>
              <span className="ai-tool-name">Figma Make</span>
            </div>
            <div className="ai-tool-item ai-tool-compact">
              <div className="ai-tool-icon"><ChatGPTIcon /></div>
              <span className="ai-tool-name">ChatGPT – Codex</span>
            </div>
            <div className="ai-tool-item ai-tool-compact">
              <div className="ai-tool-icon"><ClaudeIcon /></div>
              <span className="ai-tool-name">Claude Design – Code</span>
            </div>
            <div className="ai-tool-item ai-tool-compact">
              <div className="ai-tool-icon"><CursorIcon /></div>
              <span className="ai-tool-name">Cursor</span>
            </div>
            <div className="ai-tool-item ai-tool-compact">
              <div className="ai-tool-icon"><VsCodeIcon /></div>
              <span className="ai-tool-name">VS Code</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
