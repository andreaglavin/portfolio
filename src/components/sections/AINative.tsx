import { type ReactNode } from 'react';

import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeader } from '@/components/ui/SectionHeader';
import {
  ClaudeIcon,
  CursorIcon,
  FigmaIcon,
  GeminiIcon,
  ManusIcon,
  VsCodeIcon,
} from '@/components/icons/ToolIcons';

import styles from './AINative.module.css';

type Philosophy = {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
};

const philosophies: ReadonlyArray<Philosophy> = [
  {
    id: 'research',
    title: 'AI-Augmented Research',
    description:
      'Using AI to synthesize user research data, analyze patterns across thousands of data points, and surface insights that inform design decisions faster and more accurately.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4m0 14v4M4.22 4.22l2.83 2.83m9.9 9.9l2.83 2.83M1 12h4m14 0h4M4.22 19.78l2.83-2.83m9.9-9.9l2.83-2.83" />
      </svg>
    ),
  },
  {
    id: 'prototyping',
    title: 'Rapid Prototyping',
    description:
      'Leveraging generative AI to explore 10x more design variations in less time. From concept to high-fidelity prototype in hours, not weeks — validating ideas at unprecedented speed.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    id: 'design-to-code',
    title: 'Design-to-Code',
    description:
      'Bridging the gap between design and engineering using AI-powered tools that translate design intent into production-ready code, reducing handoff friction and accelerating delivery.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const tools: ReadonlyArray<{ name: string; icon: ReactNode }> = [
  { name: 'Figma Make', icon: <FigmaIcon /> },
  { name: 'Claude Code', icon: <ClaudeIcon /> },
  { name: 'Gemini', icon: <GeminiIcon /> },
  { name: 'Cursor', icon: <CursorIcon /> },
  { name: 'Manus', icon: <ManusIcon /> },
  { name: 'VS Code', icon: <VsCodeIcon /> },
];

export function AINative() {
  return (
    <section className={styles.section} id="ai-native">
      <Container>
        <SectionHeader
          label="Design Approach"
          title={
            <>
              AI-Native
              <br />
              Design Process
            </>
          }
          subtitle={
            <>
              My <em>workflow</em> integrates AI at every stage, from research and ideation to prototyping and delivery, enabling faster iteration and deeper insight.
            </>
          }
        />

        <div className={styles.philosophy}>
          {philosophies.map((p, i) => (
            <FadeIn key={p.id} className={styles.card} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className={styles.icon}>{p.icon}</div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDescription}>{p.description}</p>
            </FadeIn>
          ))}
        </div>

        <div className={styles.tools}>
          <h3 className={styles.toolsTitle}>My AI Toolkit</h3>
          <div className={styles.toolsGrid}>
            {tools.map((tool, i) => (
              <FadeIn key={tool.name} className={styles.tool} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className={styles.toolIcon}>{tool.icon}</div>
                <span className={styles.toolName}>{tool.name}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
