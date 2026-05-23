export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  featured?: boolean;
};

export const testimonials: ReadonlyArray<Testimonial> = [
  {
    id: 'rr',
    featured: true,
    quote:
      'Your ability to rapidly adopt AI tools, lead cross-team collaboration, and mentor others has made you a cornerstone of our success. You pioneered GenAI integration, leading the team through new technical territory and driving the adoption of AI-first practices.',
    name: 'R. R.',
    role: 'Product Design Manager, Meta',
    initials: 'RR',
  },
  {
    id: 'lh',
    quote:
      "I've seen firsthand how Andrea's skills come together to make magic happen. She is all about user empathy and pays insane attention to every little detail in the visuals and interactions. She doesn't hold back when she believes in something; she's not afraid to have those tough but honest conversations when needed. We all love working with her because she genuinely cares about her work.",
    name: 'L. H.',
    role: 'Product Manager, Meta',
    initials: 'LH',
  },
  {
    id: 'yt',
    quote:
      'Andrea excels at swiftly grasping business problems and creating prototypes that facilitate team alignment on product direction. She rapidly iterates based on user and partner feedback, showcasing exceptional speed even when tackling vague problems—standing out from other designers I\'ve worked with.',
    name: 'Y. T.',
    role: 'Engineering Lead, Meta',
    initials: 'YT',
  },
  {
    id: 'lc',
    quote:
      'Andrea sees big-picture problems and brings together stakeholders across various teams to solve them. She excels in building inclusion, improving systems, and partnering effectively.',
    name: 'L. C.',
    role: 'Senior Content Designer, Meta',
    initials: 'LC',
  },
  {
    id: 'ec',
    quote:
      'Andrea consistently architects scalable, cross-product solutions, tackling complex challenges and delivering high-impact features. She excels at systems-level thinking and at navigating uncertainty in ambiguous projects.',
    name: 'E. C.',
    role: 'Product Design Manager, Meta',
    initials: 'EC',
  },
];
