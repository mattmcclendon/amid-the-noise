export interface TagMetadata {
  title: string;
  description: string;
  collection?: string;
  lexicon?: string[];
  relatedTags?: string[];
  featuredPosts?: string[];
}

export const tagMetadata: Record<string, TagMetadata> = {
  signal: {
    title: 'Signal',
    description:
      'Signal is the central organizing idea of Amid the Noise. Nearly every essay returns to the question of how information survives distortion, resists decay, and ultimately becomes the foundation for sound judgment. Everything else begins there.',
    collection: 'signal-and-decision',
    lexicon: ['signal', 'epistemic-integrity'],
    relatedTags: ['systems-thinking', 'decision-systems', 'governance', 'perception'],
    featuredPosts: [
      'the-lineage-of-signal',
      'truth-structured',
      'reclaiming-signal',
    ],
  },

  recovery: {
    title: 'Recovery',
    description:
      'Recovery is the long, deliberate work of reclaiming agency. These essays explore what remains after collapse, how judgment is rebuilt, and why recovery ultimately becomes the foundation for every other system worth trusting.',
    collection: 'recovery-and-identity',
    lexicon: ['second-cognitive-surface'],
    relatedTags: ['agency', 'identity', 'reflection', 'continuity'],
    featuredPosts: [
      'the-only-metric',
      'the-last-illusion-to-go',
      'the-deck-was-always-mine',
    ],
  },

  'civic-systems': {
    title: 'Civic Systems',
    description:
      'Civic Systems explores the infrastructure of belonging. Throughout Amid the Noise, public institutions are examined not by the services they provide, but by the legibility, accountability, and dignity they afford the people they serve.',
    collection: 'civic-systems',
    relatedTags: ['governance', 'infrastructure', 'trust', 'belonging'],
    featuredPosts: [
      'the-poll-site-is-a-decision-system',
      'trust-is-a-system-property',
      'rebuilding-californias-homelessness-systems-from-first-principles',
    ],
  },

  design: {
    title: 'Design',
    description:
      'Design is where invisible systems become visible decisions. The essays treat design less as interface craft than as the architecture of trust, making complexity understandable while ensuring that responsibility never leaves human hands.',
    collection: 'design-practice',
    relatedTags: ['ux', 'decision-design', 'legibility', 'product-design'],
    featuredPosts: [
      'designing-invisible-systems',
      'designing-under-constraint-at-autodesk',
      'when-design-ships-it-becomes-policy',
    ],
  },

  ai: {
    title: 'Artificial Intelligence',
    description:
      'Artificial Intelligence appears throughout Amid the Noise as infrastructure rather than replacement. The work asks how AI can expand institutional perception, increase human understanding, and preserve accountability before authority is ever delegated to a machine.',
    relatedTags: ['ai-governance', 'decision-systems', 'governance', 'technology'],
    featuredPosts: [
      'ai-as-infrastructure',
      'when-ai-is-wrong',
      'human-compatible-is-not-sufficient',
    ],
  },

  'systems-thinking': {
    title: 'Systems Thinking',
    description:
      'Systems Thinking is the method that ties Amid the Noise together. Rather than treating events as isolated incidents, these essays ask what structures, incentives, and relationships made those moments possible in the first place.',
    relatedTags: ['systems', 'signal', 'governance', 'infrastructure'],
  },

  governance: {
    title: 'Governance',
    description:
      'Governance appears wherever responsibility meets consequence. Throughout Amid the Noise, it is explored less as bureaucracy than as the practical discipline of ensuring that authority, accountability, and judgment remain aligned.',
    relatedTags: ['civic-systems', 'ai-governance', 'trust', 'decision-systems'],
  },

  infrastructure: {
    title: 'Infrastructure',
    description:
      'Infrastructure is where civilization quietly reveals its priorities. The essays follow the systems people rarely notice until they fail, asking what they make possible long before anyone thinks to thank them.',
    relatedTags: ['civic-systems', 'cities', 'continuity', 'systems'],
  },

  trust: {
    title: 'Trust',
    description:
      'Trust is rarely treated as sentiment here. It emerges from systems that behave predictably under pressure, preserve dignity, and make good decisions understandable to the people affected by them.',
    relatedTags: ['signal', 'civic-systems', 'legibility', 'governance'],
  },

  memory: {
    title: 'Memory',
    description:
      'Memory is more than recollection. Throughout Amid the Noise it becomes infrastructure, preserving continuity across people, places, institutions, and the stories that quietly shape what comes next.',
    relatedTags: ['continuity', 'identity', 'place', 'writing'],
  },

  identity: {
    title: 'Identity',
    description:
      'Identity appears as something discovered rather than invented. These essays explore how experience, responsibility, recovery, and place gradually reveal the person who was there all along.',
    relatedTags: ['recovery', 'memory', 'agency', 'belonging'],
  },

  writing: {
    title: 'Writing',
    description:
      'Writing is the laboratory where ideas are tested before they become frameworks. The archive documents observations gradually becoming arguments, and arguments gradually becoming a coherent body of work.',
  },

  ux: {
    title: 'User Experience',
    description:
      'User experience is explored as the visible expression of invisible systems. The work asks how products, services, and institutions communicate their intent long before anyone reads the documentation.',
  },

  culture: {
    title: 'Culture',
    description:
      'Culture is treated as accumulated behavior made visible. Films, cities, rituals, technology, and everyday experiences become evidence of the deeper systems that produced them.',
  },

  cities: {
    title: 'Cities',
    description:
      'Cities are among the richest systems studied throughout Amid the Noise. They reveal how infrastructure, history, governance, and ordinary human behavior continually shape one another over time.',
  },

  'science-fiction': {
    title: 'Science Fiction',
    description:
      'Science fiction appears here less as escapism than as a thought laboratory. Fictional worlds provide safe places to examine governance, infrastructure, intelligence, scarcity, and the systems that may one day become ordinary.',
  },

  reflection: {
    title: 'Reflection',
    description:
      'Reflection is where lived experience slows down long enough to become useful. These pieces connect ordinary moments to larger patterns that continue resurfacing throughout Amid the Noise.',
  },

  systems: {
    title: 'Systems',
    description:
      'Systems are the connective tissue of Amid the Noise. Whether the subject is recovery, software, cities, organizations, or artificial intelligence, the recurring question remains the same: how do complex systems actually behave?',
  },

  technology: {
    title: 'Technology',
    description:
      'Technology is examined not for novelty, but for consequence. The essays explore how tools reshape institutions, relationships, and human judgment long after the excitement of invention fades.',
  },

  'decision-systems': {
    title: 'Decision Systems',
    description:
      'Decision Systems sit at the intersection of information, judgment, and responsibility. These essays explore what happens when software stops recording the past and begins participating in human decisions, and how governance must evolve alongside that transition.',
  },

  'decision-design': {
    title: 'Decision Design',
    description:
      'Decision Design examines the architecture surrounding consequential choices. Rather than optimizing interfaces alone, these essays ask how systems present uncertainty, preserve human agency, and make sound judgment more likely.',
  },

  'ai-governance': {
    title: 'AI Governance',
    description:
      'AI Governance is concerned with keeping intelligent systems accountable long after deployment. The recurring question is not whether models are capable, but whether institutions remain able to understand, audit, and direct them.',
  },

  'design-systems': {
    title: 'Design Systems',
    description:
      'Design Systems are explored as operational infrastructure rather than component libraries. Consistency matters because it creates shared understanding, predictable behavior, and organizational memory across products and teams.',
  },

  'enterprise-systems': {
    title: 'Enterprise Systems',
    description:
      'Enterprise Systems reveal where complexity becomes unavoidable. Drawing from decades designing financial, manufacturing, and data platforms, these essays explore how organizations coordinate decisions across people, technology, and scale.',
  },

  'product-design': {
    title: 'Product Design',
    description:
      'Product Design appears throughout Amid the Noise as the practice of translating complexity into useful action. The emphasis is less on screens than on understanding the human and organizational systems products ultimately serve.',
  },

  'design-leadership': {
    title: 'Design Leadership',
    description:
      'Design Leadership is treated as stewardship more than management. These essays examine how leaders shape culture, create clarity, and help organizations make better decisions through better questions.',
  },

  leadership: {
    title: 'Leadership',
    description:
      'Leadership is explored as the discipline of creating conditions where good judgment can flourish. Throughout the archive, influence consistently proves more durable than authority alone.',
  },

  'decision-making': {
    title: 'Decision Making',
    description:
      'Decision Making is rarely about choosing between obvious options. These essays examine how information, uncertainty, incentives, and cognitive limits quietly shape the decisions people believe they are making.',
  },

  perception: {
    title: 'Perception',
    description:
      'Perception is where signal first becomes meaning. The essays explore how framing, attention, memory, and context influence what we believe we observe before reasoning has even begun.',
  },

  agency: {
    title: 'Agency',
    description:
      'Agency is the ability to act with intention rather than reaction. Throughout Amid the Noise, it marks the point where clarity becomes responsibility and understanding becomes choice.',
  },

  attention: {
    title: 'Attention',
    description:
      'Attention is treated as civilization’s scarcest resource. These essays explore what deserves sustained notice and how modern systems increasingly compete to redirect it.',
  },

  belonging: {
    title: 'Belonging',
    description:
      'Belonging is explored as a property of well-designed systems rather than mere acceptance. The recurring question is how people come to feel that a place, institution, or community was built with them in mind.',
  },

  continuity: {
    title: 'Continuity',
    description:
      'Continuity is the quiet force connecting generations, institutions, and identity. Amid the Noise repeatedly asks what survives disruption and what deserves to be carried forward.',
  },

  judgment: {
    title: 'Judgment',
    description:
      'Judgment is where signal becomes action. The archive consistently explores how better perception, governance, and design ultimately exist to improve human judgment rather than replace it.',
  },

  storytelling: {
    title: 'Storytelling',
    description:
      'Storytelling is treated as infrastructure for human understanding. Stories compress complexity into forms that travel across generations while quietly preserving values, memory, and meaning.',
  },

  humanity: {
    title: 'Humanity',
    description:
      'Humanity serves as the reference point for the entire publication. Whether discussing AI, cities, recovery, or governance, the enduring question is what helps people remain recognizably human.',
  },

  legibility: {
    title: 'Legibility',
    description:
      'Legibility is one of the recurring goals of Amid the Noise. Systems become trustworthy when people can understand how they behave, why they behave that way, and where responsibility ultimately resides.',
  },
};