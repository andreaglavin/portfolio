/**
 * Featured work projects shown on the home page.
 * Update once here — Work section reads from this array.
 */

export type WorkProject = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: ReadonlyArray<string>;
  stats: ReadonlyArray<{ value: string; label: string }>;
  caseStudyPath?: string;
};

export const featuredWork: ReadonlyArray<WorkProject> = [
  {
    id: 'genai-filtering',
    title: 'GenAI for Filtering — Designing the Future of Data Exploration',
    description:
      "Led UX design for Meta's first GenAI-powered feature in Actionable Insights — a natural language querying system that lets Telecom Partners explore complex network and market data conversationally. Drove design from hackathon POC through pilot and launch.",
    image: 'assets/GenAI - Showing results.gif',
    imageAlt: 'GenAI Filtering Panel',
    tags: ['GenAI', 'Enterprise B2B', '0 → 1'],
    stats: [
      { value: '~89%', label: 'Prompt Acceptance' },
      { value: '49→85%', label: 'AI Response Quality' },
      { value: '0 → 1', label: 'First AI Feature' },
    ],
    caseStudyPath: '/case-study/genai-filtering',
  },
  {
    id: 'analytics-suite',
    title: 'From Reporting to Action — Redesigning the Analytics Suite',
    description:
      'Led the transformation of a passive reporting tool into a proactive decision-support engine by bridging the gap between seeing data to identifying and acting on opportunities. Designed a unified Criteria Engine that replaced static dashboards, enabling users to define custom opportunity logic across thousands of data combinations.',
    image: 'assets/Opportunities.png',
    imageAlt: 'Analytics Suite — Decision-Support Engine',
    tags: ['Product Strategy', '0 → 1', 'Data Analytics'],
    stats: [
      { value: '20% ↑', label: 'Task Completion' },
      { value: '1000s', label: 'Data Combinations' },
      { value: '65%', label: "of Team's Roadmap" },
    ],
  },
  {
    id: 'roaming-insights',
    title: 'Roaming Insights — Turning Big Data into Million Dollar Leverage',
    description:
      "To offset soaring B2B authentication costs by delivering unprecedented competitive visibility to telecom partners, I designed Meta's first 0-to-1 roaming intelligence platform. I overhauled its information architecture and utilized real usage data to scale a 3-month MVP into a multi-level analytics suite.",
    image: 'assets/Roaming 1.png',
    imageAlt: 'Roaming Insights',
    tags: ['Roaming Intelligence', 'MVP to Scale', 'IA'],
    stats: [
      { value: '75%', label: 'Adoption Rate' },
      { value: '€24M+', label: 'Partner Savings' },
      { value: 'New', label: 'Industry KPI' },
    ],
  },
];

export type PastWorkProject = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: ReadonlyArray<string>;
  /** Optional second-card style override flag for the e-commerce card aspect ratio. */
  variant?: 'default' | 'tall';
};

export const pastWork: ReadonlyArray<PastWorkProject> = [
  {
    id: 'xcaret',
    title: 'Conversational UX for Assisted Sales',
    description:
      'Designed an AI-assisted sales experience within Messenger for Xcaret Group. User research revealed ~70% of users had purchase intent but were dropping off. Proposed a semi-automated purchase flow that opened a new acquisition channel, prevented churn, and led to payment gateway integration.',
    image: 'assets/Gif Xcaret.gif',
    imageAlt: 'Xcaret Chatbot',
    tags: ['Conversational UX', 'AI Assistant', 'Messenger'],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Checkout Optimization',
    description:
      "Streamlined the online store's checkout experience using e-commerce best practices and UX improvements, driving a 200% increase in purchase conversion rates during the initial months post-launch.",
    image: 'assets/EPDH2.PNG',
    imageAlt: 'E-Commerce Checkout Optimization',
    tags: ['E-Commerce', 'UX Design', 'Conversion'],
    variant: 'tall',
  },
];
