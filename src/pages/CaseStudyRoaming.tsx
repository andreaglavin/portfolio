import { ImpactGrid, ResultsHero } from '@/components/sections/CaseStudyBlocks';
import { CaseStudyImage } from '@/components/sections/CaseStudyImage';
import { CaseStudySection, CenteredHeader } from '@/components/sections/CaseStudySection';
import { CaseStudyLayout } from './CaseStudyLayout';

export function CaseStudyRoaming() {
  return (
    <CaseStudyLayout
      documentTitle="Roaming Insights — Case Study"
      title="Roaming Insights"
      subtitle="Turning Big Data into Million Dollar Leverage"
      intro="To offset soaring B2B authentication costs by delivering unprecedented competitive visibility to telecom partners, I designed Meta's first 0-to-1 roaming intelligence platform. I overhauled its information architecture and utilized real usage data to scale a 3-month MVP into a multi-level analytics suite."
      tags={['Roaming Intelligence', 'MVP to Scale', 'IA']}
      meta={[
        { label: 'Role', value: 'Lead Product Designer' },
        { label: 'Team', value: 'PM, 3 Engineers, Data Science' },
        { label: 'Timeline', value: '3-month MVP → multi-level suite' },
        { label: 'Impact', value: '€24M+ partner savings' },
      ]}
      prev={{ to: '/case-study/analytics-suite', label: 'Previous Project' }}
      next={{ to: '/', label: 'Back to Work' }}
    >
      <div style={{ background: 'var(--color-bg)', padding: 'var(--space-12) 0' }}>
        <CaseStudyImage src="assets/Roaming 1.png" alt="Roaming Insights" fullBleed />
      </div>

      <CaseStudySection background="base">
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2>The Challenge</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)' }}>
            Content coming soon. This section will detail the rising authentication costs, the competitive visibility gap, and how the team prioritized scope for a 3-month MVP.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection background="alt">
        <CenteredHeader label="Outcomes" title="Results & Impact" />
        <ResultsHero
          results={[
            { number: '75%', label: 'Adoption Rate' },
            { number: '€24M+', label: 'Partner Savings' },
          ]}
        />
        <ImpactGrid
          items={[
            { badge: '0 → 1', description: "Meta's first 0-to-1 roaming intelligence platform" },
            { badge: 'New KPI', description: 'Established a new industry benchmark for roaming visibility' },
            { badge: 'IA', description: 'Re-architected information hierarchy from MVP into multi-level analytics' },
            { badge: 'Scale', description: 'Drove multi-quarter roadmap from real usage signals' },
          ]}
        />
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
