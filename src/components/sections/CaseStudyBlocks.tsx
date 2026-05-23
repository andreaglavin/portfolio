import { type ReactNode } from 'react';

import styles from './CaseStudyBlocks.module.css';

/* ---------- Phase cards (numbered timeline-style) ---------- */

export type Phase = { num: string; title: string; description: string };

export function PhaseList({ phases }: { phases: ReadonlyArray<Phase> }) {
  return (
    <div className={styles.phases}>
      {phases.map((phase, i) => (
        <div key={phase.num} className={styles.phaseCard}>
          <div className={styles.phaseIndicator}>
            <span className={styles.phaseNum}>{phase.num}</span>
            {i < phases.length - 1 && <div className={styles.phaseLine} />}
          </div>
          <div className={styles.phaseContent}>
            <h3>{phase.title}</h3>
            <p>{phase.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Principle cards (numbered grid) ---------- */

export type Principle = { num: string; title: string; description: string };

export function PrincipleGrid({ principles }: { principles: ReadonlyArray<Principle> }) {
  return (
    <div className={styles.principles}>
      {principles.map((p) => (
        <div key={p.num} className={styles.principle}>
          <div className={styles.principleNum}>{p.num}</div>
          <h4>{p.title}</h4>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- Bullet rows with arrow icon ---------- */

export type ArrowItem = { title: string; description: string };

export function ArrowList({ items }: { items: ReadonlyArray<ArrowItem> }) {
  return (
    <div className={styles.arrowList}>
      {items.map((item) => (
        <div key={item.title} className={styles.arrowItem}>
          <span className={styles.arrowIcon} aria-hidden="true">
            →
          </span>
          <div>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Decision (alternating text + media) ---------- */

export type Decision = {
  num: string;
  title: string;
  description: string;
  image: { src: string; alt: string; constrained?: boolean };
};

export function DecisionList({ decisions }: { decisions: ReadonlyArray<Decision> }) {
  return (
    <div className={styles.decisions}>
      {decisions.map((d, i) => (
        <div key={d.num} className={[styles.decision, i % 2 === 1 && styles.decisionReverse].filter(Boolean).join(' ')}>
          <div className={styles.decisionText}>
            <span className={styles.decisionNum}>{d.num}</span>
            <h3>{d.title}</h3>
            <p>{d.description}</p>
          </div>
          <div className={styles.decisionMedia}>
            <img
              src={d.image.src}
              alt={d.image.alt}
              className={[styles.decisionImg, d.image.constrained && styles.decisionImgConstrained]
                .filter(Boolean)
                .join(' ')}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Research grid with methods + insights ---------- */

export type Insight = { title: string; description: string };

export function ResearchGrid({
  methods,
  insights,
}: {
  methods: ReadonlyArray<string>;
  insights: ReadonlyArray<Insight>;
}) {
  return (
    <div className={styles.researchGrid}>
      <div className={[styles.researchCard, styles.researchMethods].join(' ')}>
        <h4>Methods</h4>
        <ul className={styles.list}>
          {methods.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>
      {insights.map((insight) => (
        <div key={insight.title} className={[styles.researchCard, styles.researchInsight].join(' ')}>
          <div className={styles.insightIcon} aria-hidden="true">
            !
          </div>
          <h4>{insight.title}</h4>
          <p>{insight.description}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- Comparison table (capability / without AI / with AI) ---------- */

export type ComparisonRow = { capability: string; without: string; withAI: string };

export function Comparison({
  rows,
  headings = ['Capability', 'Without AI', 'With AI'],
}: {
  rows: ReadonlyArray<ComparisonRow>;
  headings?: [string, string, string];
}) {
  return (
    <div className={styles.comparison}>
      <div className={styles.comparisonHead}>
        <span>{headings[0]}</span>
        <span>{headings[1]}</span>
        <span>{headings[2]}</span>
      </div>
      {rows.map((row) => (
        <div key={row.capability} className={styles.comparisonRow}>
          <span>{row.capability}</span>
          <span>{row.without}</span>
          <span className={styles.aiBadge}>{row.withAI}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------- Big results numbers ---------- */

export type ResultBig = { number: string; label: string; description?: string };

export function ResultsHero({ results }: { results: ReadonlyArray<ResultBig> }) {
  return (
    <div className={styles.resultsHero}>
      {results.map((r, i) => (
        <div key={r.label} className={styles.resultBig}>
          <span className={styles.resultNumber}>{r.number}</span>
          <span className={styles.resultLabel}>{r.label}</span>
          {r.description && <p>{r.description}</p>}
          {i < results.length - 1 && <div className={styles.resultDivider} aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}

export type ImpactCard = { badge: string; description: string };

export function ImpactGrid({ items }: { items: ReadonlyArray<ImpactCard> }) {
  return (
    <div className={styles.impactGrid}>
      {items.map((item) => (
        <div key={item.badge + item.description.slice(0, 20)} className={styles.impactCard}>
          <span className={styles.impactBadge}>{item.badge}</span>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- Callout (big centered statement) ---------- */

export function Callout({ children }: { children: ReactNode }) {
  return <div className={styles.callout}>{children}</div>;
}

/* ---------- Vision block (dramatic large statement) ---------- */

export function VisionBlock({ children }: { children: ReactNode }) {
  return <div className={styles.vision}>{children}</div>;
}

/* ---------- Generic styled list ---------- */

export function StyledList({ items }: { items: ReadonlyArray<ReactNode> }) {
  return (
    <ul className={styles.list}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
