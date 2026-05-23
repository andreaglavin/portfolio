import { ImpactGrid, ResultsHero } from '@/components/sections/CaseStudyBlocks';
import { CaseStudyImage } from '@/components/sections/CaseStudyImage';
import { CaseStudySection, CenteredHeader } from '@/components/sections/CaseStudySection';
import { CaseStudyLayout } from './CaseStudyLayout';

export function CaseStudyAnalytics() {
  return (
    <CaseStudyLayout
      documentTitle="Analytics Suite — Case Study"
      title="From Reporting to Action"
      subtitle="Redesigning the Analytics Suite"
      intro="Led the transformation of a passive reporting tool into a proactive decision-support engine by bridging the gap between seeing data to identifying and acting on opportunities. Designed a unified Criteria Engine that replaced static dashboards, enabling users to define custom opportunity logic across thousands of data combinations."
      tags={['Product Strategy', '0 → 1', 'Data Analytics']}
      meta={[
        { label: 'Role', value: 'Senior Product Designer' },
        { label: 'Team', value: 'PM, 4 Engineers, Data Science' },
        { label: 'Scope', value: 'Multi-product analytics suite' },
        { label: 'Impact', value: '+20% task completion' },
      ]}
      prev={{ to: '/case-study/genai-filtering', label: 'Previous Project' }}
      next={{ to: '/case-study/roaming-insights', label: 'Next Project' }}
    >
      <div style={{ background: 'var(--color-bg)', padding: 'var(--space-12) 0' }}>
        <CaseStudyImage src="assets/Opportunities.png" alt="Analytics Suite — Opportunities" fullBleed />
      </div>

      <CaseStudySection background="base">
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2>The Challenge</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)' }}>
            Content coming soon. This section will detail the fragmentation between dashboards, the gap between data and action, and how the team consolidated the experience.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection background="alt">
        <CenteredHeader label="Outcomes" title="Results & Impact" />
        <ResultsHero
          results={[
            { number: '+20%', label: 'Task Completion' },
            { number: '1000s', label: 'Data Combinations' },
          ]}
        />
        <ImpactGrid
          items={[
            { badge: 'Strategy', description: "Defined 65% of the team's annual roadmap" },
            { badge: 'Unification', description: 'Replaced fragmented dashboards with a single Criteria Engine' },
            { badge: 'Self-serve', description: 'Empowered users to build custom opportunity logic without engineering' },
            { badge: 'Foundation', description: 'Set the pattern library for future analytics surfaces' },
          ]}
        />
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
