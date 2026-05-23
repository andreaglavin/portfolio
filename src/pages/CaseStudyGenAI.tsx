import {
  ArrowList,
  Callout,
  Comparison,
  DecisionList,
  ImpactGrid,
  PhaseList,
  PrincipleGrid,
  ResearchGrid,
  ResultsHero,
  StyledList,
  VisionBlock,
} from '@/components/sections/CaseStudyBlocks';
import { BeforeAfter, CaseStudyImage } from '@/components/sections/CaseStudyImage';
import {
  CaseStudySection,
  CenteredHeader,
  Column,
  SectionLabel,
  TwoColumn,
} from '@/components/sections/CaseStudySection';
import { CaseStudyLayout } from './CaseStudyLayout';

export function CaseStudyGenAI() {
  return (
    <CaseStudyLayout
      documentTitle="GenAI for Filtering — Case Study"
      title="GenAI for Filtering"
      subtitle="Designing the Future of Data Exploration"
      intro="I led the UX design for Meta's first GenAI-powered feature in the Actionable Insights portal — a natural language querying system that lets Telecom Partners explore complex network and market data conversationally."
      tags={['GenAI', 'Enterprise B2B', 'Product Design', '0 → 1']}
      meta={[
        { label: 'Role', value: 'Lead Product Designer' },
        { label: 'Team', value: 'PM, 3 Engineers, Content Designer, Data Scientist, 3 AMs' },
        { label: 'Product', value: "Actionable Insights — Meta's B2B platform for Telecom Partners" },
        { label: 'Impact', value: 'AI quality: 49% → 85%' },
      ]}
      prev={{ to: '/', label: 'Back to Work' }}
    >
      <div style={{ background: 'var(--color-bg)', padding: 'var(--space-12) 0' }}>
        <CaseStudyImage src="assets/9o.png" alt="GenAI Filtering Panel on Maps Interface" fullBleed />
      </div>

      <CaseStudySection background="base">
        <TwoColumn>
          <Column>
            <SectionLabel>Background</SectionLabel>
            <h2>Context</h2>
            <p>
              Meta's Actionable Insights platform serves the world's largest Telecom operators, providing connectivity data across network performance, market share, and device adoption.
            </p>
            <p>
              Partners use this data to make million-dollar infrastructure investment decisions. Users range from executive leadership to specialized teams in network planning, market analysis, and data intelligence.
            </p>
          </Column>
          <Column>
            <SectionLabel>Problem Space</SectionLabel>
            <h2>The Challenge</h2>
            <p>
              The existing cascading dropdown filters made it difficult for users to filter and retrieve specific data combinations, hindering product adoption.
            </p>
            <StyledList
              items={[
                <>
                  <strong>Expertise Required:</strong> Users needed deep knowledge to compose valid filter combinations across hundreds of metrics.
                </>,
                <>
                  <strong>Siloed Data:</strong> Impossible to create cross-domain filters (Network + Market) or comparative queries.
                </>,
              ]}
            />
          </Column>
        </TwoColumn>
      </CaseStudySection>

      <CaseStudySection background="elevated">
        <Callout>
          <SectionLabel>The Opportunity</SectionLabel>
          <h2>Natural language as a new paradigm for data exploration</h2>
          <p>
            Large Language Models offered a paradigm shift: natural language as a new mode of interaction that could overcome the limitations of traditional UX filter patterns while enabling entirely new analytical capabilities — allowing users to express their filtering intent more intuitively and flexibly.
          </p>
        </Callout>
      </CaseStudySection>

      <div style={{ background: 'var(--color-bg)', padding: 'var(--space-12) 0' }}>
        <BeforeAfter
          before={{
            src: 'assets/Manual filters.png',
            alt: 'Cascading Dropdowns',
            label: 'Before — Cascading Dropdowns',
          }}
          after={{
            src: 'assets/13o.png',
            alt: 'Natural Language Panel',
            label: 'After — Natural Language Panel',
          }}
        />
      </div>

      <CaseStudySection background="alt">
        <CenteredHeader label="Journey" title="From Concept to Launch" />
        <PhaseList
          phases={[
            {
              num: '01',
              title: 'Proof of Concept',
              description:
                'We hacked together a demo showing it was possible to leverage LLMs to convert natural language into structured data queries rendered on a map. We presented the POC during All Hands, generating great excitement and prioritizing its implementation.',
            },
            {
              num: '02',
              title: 'Pilot & Launch',
              description:
                "We integrated a GenAI filtering panel into the existing Maps interface — the product's most frequently used surface. After testing with 3 pilot partners and meeting our initial goals, we successfully launched the feature.",
            },
          ]}
        />
      </CaseStudySection>

      <CaseStudySection background="base">
        <TwoColumn wide>
          <Column>
            <SectionLabel>The Solution</SectionLabel>
            <h2>GenAI Filtering Panel</h2>
            <p>
              We built a GenAI filtering panel powered by <strong>Llama 3.3</strong> that allowed users to filter the map using natural language.
            </p>
          </Column>
          <Column>
            <ArrowList
              items={[
                {
                  title: 'Rapid Prototyping',
                  description:
                    'Prototyping in Figma Make allowed us to iterate fast, brainstorm in real-time, and get designs into production much faster',
                },
                {
                  title: 'Design × Engineering',
                  description:
                    'I worked alongside the engineering team, vibe coding production changes to level up the quality of the final experience',
                },
              ]}
            />
          </Column>
        </TwoColumn>
      </CaseStudySection>

      <CaseStudySection background="elevated">
        <CenteredHeader
          label="Design Framework"
          title="Defining the Experience"
          description="We researched and identified GenAI Meta design principles and heuristics to craft the filtering experience."
        />
        <PrincipleGrid
          principles={[
            {
              num: '01',
              title: 'Set Clear Expectations',
              description:
                "Craft positive first impressions that provide transparency into GenAI's presence and the safeguards around it.",
            },
            {
              num: '02',
              title: 'Provide Agency & Deliver on Intent',
              description:
                "Ensure the balance between individual agency and reliance on AI serves the user's intent.",
            },
            {
              num: '03',
              title: 'Demonstrate the Possibilities',
              description: "Show what's possible by encouraging play, experimentation, and deeper exploration.",
            },
            {
              num: '04',
              title: 'Anticipate & Prioritize Feedback',
              description:
                'When things go wrong, acknowledge the issue and provide clear feedback channels.',
            },
          ]}
        />
      </CaseStudySection>

      <CaseStudySection background="accent-subtle">
        <TwoColumn wide>
          <Column>
            <SectionLabel>Strategy</SectionLabel>
            <h2>Product Positioning</h2>
            <p>
              Rather than embedding GenAI as "just another filter," we created a distinct panel with its own entry point. This was a deliberate strategic choice.
            </p>
          </Column>
          <Column>
            <ArrowList
              items={[
                {
                  title: 'Avoids narrowing the mental model',
                  description: 'GenAI can do more than filter — derived metrics, comparisons, follow-ups',
                },
                {
                  title: 'Creates room for capability expansion',
                  description: 'The panel can evolve into a full "Insights Assistant"',
                },
                {
                  title: 'Sets clear expectations',
                  description: "Users know when they're interacting with AI vs. manual controls",
                },
              ]}
            />
          </Column>
        </TwoColumn>
      </CaseStudySection>

      <CaseStudySection background="base">
        <CenteredHeader label="Deep Dive" title="Key Design Decisions" />
        <DecisionList
          decisions={[
            {
              num: '01',
              title: 'Discovering the Feature',
              description:
                'A NUX and tutorial draw attention to the entry point for first-time users. After agreeing to terms of service, the AI panel remains open by default. Suggested prompts provide tailored examples, and a "What I can help with" link explains available functionality. An additional entry point in the manual filters prompts: "Need advanced filters? Use AI."',
              image: { src: 'assets/GenAI - Tutorial.gif', alt: 'Feature Discovery — NUX & Suggested Prompts' },
            },
            {
              num: '02',
              title: 'Transparent AI Processing',
              description:
                'Once a user prompts the AI, a rotating carousel shows the processing steps — giving users feedback on what\'s happening during loading. Once results arrive, steps collapse into "reasoning," allowing users to verify that the AI searched through the right things.',
              image: { src: 'assets/GenAI - Carrousel.gif', alt: 'AI Processing — Loading & Reasoning', constrained: true },
            },
            {
              num: '03',
              title: 'Interoperability with Manual Filters',
              description:
                "The AI's functionality exceeds manual filters. Only one panel is open at a time. The map indicates when AI filters are in use vs. manual. Warning messages ensure users understand that manual filters will override AI results.",
              image: { src: 'assets/GenAI - Interoperability.gif', alt: 'Manual vs. AI Filter States', constrained: true },
            },
            {
              num: '04',
              title: 'Showing Results',
              description:
                "The map automatically renders with AI-applied filters. The AI panel displays a summary and specific filter tokens, showing exactly which parameters were applied. If the AI can't produce results, we surface the reason clearly.",
              image: { src: 'assets/GenAI - Showing results.gif', alt: 'Results — Map, Tokens & Error States', constrained: true },
            },
            {
              num: '05',
              title: 'Derived Metrics',
              description:
                'A new capability enabled exclusively by GenAI. Custom formulas require a unique display in the panel, with tokens highlighting how the metric was calculated and which filters were applied. Additional insights are shown via tooltips on hover.',
              image: { src: 'assets/Derived metrics 1.png', alt: 'Derived Metrics — Tokens & Tooltips', constrained: true },
            },
            {
              num: '06',
              title: 'Actions & Feedback',
              description:
                'Contextual actions to download and share results help drive engagement. Every AI response includes thumbs up/down feedback to capture quality data, plus a modal for detailed input.',
              image: { src: 'assets/GenAI - Actions.gif', alt: 'Actions & Feedback UI', constrained: true },
            },
          ]}
        />
      </CaseStudySection>

      <CaseStudySection background="alt">
        <CenteredHeader
          label="Validation"
          title="Research & Discovery"
          description="We conducted early testing with 3 pilot partners using an initial prototype, which I helped build through vibe coding. We also leveraged AI to run critiques."
        />
        <ResearchGrid
          methods={[
            'Partner interviews',
            'Dogfooding sessions (testing with real data)',
            'Prompt evaluation audits (scoring for response quality)',
            'AI critique',
          ]}
          insights={[
            {
              title: 'Mental Model Mismatch',
              description:
                'Users struggled to understand AI capabilities and limitations, as results varied based on partner-specific data availability.',
            },
            {
              title: 'Trust Through Transparency',
              description:
                'Partners expected to see how the AI interpreted their question before trusting the results.',
            },
            {
              title: 'Integration Over Isolation',
              description:
                'GenAI results were expected to integrate seamlessly with existing tools (download, share, link to dashboards).',
            },
          ]}
        />
      </CaseStudySection>

      <CaseStudySection background="elevated">
        <TwoColumn wide>
          <Column>
            <SectionLabel>Capabilities Unlocked</SectionLabel>
            <h2>AI-Driven Innovation</h2>
            <p>
              GenAI enabled real-time complex data synthesis — capabilities previously impossible without manual intervention.
            </p>
          </Column>
          <Column>
            <Comparison
              rows={[
                { capability: 'Derived metrics', without: 'Manual export + spreadsheet', withAI: 'One sentence' },
                { capability: 'Cross-domain queries', without: 'Navigate separate pages', withAI: 'One sentence' },
                { capability: 'Competitor comparisons', without: 'Side-by-side manual', withAI: 'One sentence' },
                { capability: 'Complex multi-filter', without: '6+ dropdown selections', withAI: 'One sentence' },
                { capability: 'Temporal analysis', without: 'Date picker + reapply', withAI: 'One sentence' },
              ]}
            />
          </Column>
        </TwoColumn>
      </CaseStudySection>

      <CaseStudySection background="gradient">
        <VisionBlock>
          <SectionLabel>Looking Ahead</SectionLabel>
          <h2>Long-Term Vision — The Analytics Agent</h2>
          <p>
            The scope of this feature extends beyond filtration. The GenAI panel was designed as the foundation for a future <strong>Analytics Agent</strong> — an AI-powered assistant that can autonomously apply filters, generate visualizations, surface insights, and manipulate the product's interface on behalf of the user.
          </p>
        </VisionBlock>
      </CaseStudySection>

      <div style={{ background: 'var(--color-bg)', padding: 'var(--space-12) 0' }}>
        <CaseStudyImage src="assets/26.png" alt="Long-Term Vision — Analytics Agent Concept" fullBleed />
      </div>

      <CaseStudySection background="base">
        <CenteredHeader label="Outcomes" title="Results & Impact" />
        <ResultsHero
          results={[
            {
              number: '~89%',
              label: 'Prompt Acceptance Rate',
              description: 'Consistent top-tier accuracy ratings from power users',
            },
            {
              number: '49→85%',
              label: 'AI Response Quality',
              description: '40% improvement from pilot to launch across 3 continents',
            },
          ]}
        />
        <ImpactGrid
          items={[
            { badge: '0 → 1', description: 'First application of AI to generate insights in the product' },
            {
              badge: 'AI-UI',
              description:
                "AI manipulates the product's actual interface — maps, filters, visualizations — setting the foundation for an agentic future",
            },
            {
              badge: 'Strategy',
              description:
                'Findings became the foundation for the AI Portal Vision, directly informing creation of a new AI workstream',
            },
            {
              badge: 'System',
              description:
                'Established reusable GenAI patterns now adopted across the product, plus validation processes and prompt guides',
            },
          ]}
        />
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
