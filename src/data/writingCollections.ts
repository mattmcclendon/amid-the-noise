

export interface WritingCollection {
  slug: string;
  title: string;
  description: string;
  intro: string;
  postTitles: string[];
}

export const writingCollections: WritingCollection[] = [
  {
    slug: 'signal-and-decision',
    title: 'Signal & Decision',
    description: 'How information becomes judgment, and how judgment becomes action.',
    intro:
      'This collection follows the evolution of signal as the central organizing idea behind Amid the Noise, from observation and interpretation through governance, trust, and decision-making.',
    postTitles: [
      'The Lineage of Signal',
      'Truth, Structured',
      'The System Decides First',
      'Reclaiming Signal',
      'From Signal to Decision',
    ],
  },
  {
    slug: 'civic-systems',
    title: 'Civic Systems',
    description: 'Institutions, infrastructure, democracy, and the systems that organize public life.',
    intro:
      'Essays exploring how civic systems succeed or fail through trust, participation, infrastructure, and dignity.',
    postTitles: [
      'The Day April Voted',
      'The Poll Site Is a Decision System',
      'Who Keeps the Lights On?',
      'Rebuilding California’s Homelessness Systems from First Principles',
      'When the System Is Legible',
    ],
  },
  {
    slug: 'design-practice',
    title: 'Design Practice',
    description: 'Thirty years of designing enterprise software, decision systems, and products people depend on.',
    intro:
      'Case studies and essays drawn from three decades designing enterprise software, data platforms, AI, and decision systems.',
    postTitles: [
      'UX and the Human Experience',
      'Designing Invisible Systems',
      'Designing Under Constraint at Autodesk',
      'Designing Trust Inside Modern Data Infrastructure',
      'Designing Systems That Learn: A Practitioner’s Update',
    ],
  },
  {
    slug: 'recovery-and-identity',
    title: 'Recovery & Identity',
    description: 'Essays about recovery, agency, identity, and the long work of becoming present.',
    intro:
      'Personal reflections on recovery, responsibility, identity, resilience, and the slow rebuilding of a life.',
    postTitles: [
      'The Only Metric',
      'The Last Illusion to Go',
      'The Deck Was Always Mine',
      'Half-Presence',
      'I Forgive You',
    ],
  },
  {
    slug: 'place-and-continuity',
    title: 'Place & Continuity',
    description: 'Cities, landscapes, infrastructure, and the physical systems that carry memory across generations.',
    intro:
      'Essays where places, infrastructure, and landscapes reveal the continuity between history, belonging, and civic life.',
    postTitles: [
      'Before It Was Empty, It Was Everything',
      'The Roads We Built to Bypass Ourselves',
      "The Roundhouse That Isn't There",
      'Remembering My Father',
      'Civilization Leaves Fossils',
    ],
  },
  {
    slug: 'stories-and-culture',
    title: 'Stories & Culture',
    description: 'Essays that use stories, literature, history, and shared culture to better understand the world around us.',
    intro:
      'Stories are one way people preserve values, test ideas, and make sense of complexity. These essays explore what literature, history, folklore, and shared culture reveal about the human systems we inhabit.',
    postTitles: [
      'Toy Stories',
      'The Quiet Machinery of Studio Ghibli',
      'The Families Aboard the Enterprise',
      'So Say We All',
      'Samuel Clemens Keeps Appearing',
    ],
  },
];