export type TimelineEntry = {
  date: string;
  role: string;
  company: string;
};

export const timeline: ReadonlyArray<TimelineEntry> = [
  { date: '2020 — Present', role: 'Senior Product Designer', company: 'Meta' },
  { date: '2018 — 2020', role: 'Director of UX and Product Design', company: 'Yalo' },
  { date: '2017 — 2018', role: 'Product Design Manager', company: 'Pulpomatic' },
  { date: '2015 — 2017', role: 'Design Consultant', company: 'Multiplica, The Cocktail' },
];
