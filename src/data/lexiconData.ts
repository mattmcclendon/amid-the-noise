export interface Concept {
  title: string;
  description: string;
  href?: string;
}

export interface RelatedWork {
  title: string;
  href: string;
  meta: string;
  description: string;
}

export interface LexiconSectionData {
  eyebrow?: string;
  title: string;
  intro?: string;
  featured: Concept[];
  related: RelatedWork[];
  additionalTitle: string;
  additional: Concept[];
}

export const conceptGroups: LexiconSectionData[] = [
  {
    eyebrow: 'Emerging',
    title: 'Currently emerging',
    intro:
      'Concepts still taking shape. These are recurring observations that have started to develop into usable language.',
    featured: [
      {
        title: 'Epistemic Integrity',
        description:
          "The degree to which an institution's internal representation of reality corresponds to reality itself. A system with epistemic integrity can still be wrong, but it remains corrigible because its errors can be detected, examined, and brought back into contact with evidence.",
      },
      {
        title: 'Institutional Perception',
        description:
          'The ability of an institution to perceive, interpret, and respond to reality through the information available to it. This includes what the institution can see, what it cannot see, and what its internal structures make difficult to notice.',
      },
      {
        title: 'Second Cognitive Surface',
        description:
          'AI functioning as an external layer of reasoning, memory, and synthesis that extends human cognition without replacing human judgment. The question is not whether the surface is intelligent, but whether it improves what a person can notice, hold, and decide.',
      },
    ],
    related: [
      {
        title: 'From Signal to Decision',
        href: '/writing/from-signal-to-decision',
        meta: 'Writing',
        description:
          'A practical essay on preserving uncertainty long enough for it to matter at the point of decision.',
      },
      {
        title: 'The Infrastructure of Belonging',
        href: '/writing/papers/the-infrastructure-of-belonging',
        meta: 'Research Paper',
        description:
          'A civic systems framework examining how institutions become reachable through connectors, continuity, and reduced distance.',
      },
      {
        title: 'Designing Trust Inside Modern Data Infrastructure',
        href: '/writing/field-studies/dremio',
        meta: 'Field Study',
        description:
          'A field study on semantic systems, lineage, and cognitive legibility inside modern data infrastructure.',
      },
    ],
    additionalTitle: 'Additional emerging concepts',
    additional: [
      {
        title: 'Epistemic Divergence',
        description:
          "The gradual separation between reality and an institution's internal representation of reality.",
      },
      {
        title: 'Decision Weather',
        description:
          'The surrounding conditions that shape judgment before a formal decision occurs: pressure, incentives, fatigue, visibility, uncertainty, and the emotional climate of the system.',
      },
      {
        title: 'Institutional Blind Spot',
        description:
          'A recurring area of reality that an institution cannot reliably perceive because its tools, incentives, categories, or reporting structures were not built to see it.',
      },
      {
        title: 'Cognitive Stewardship',
        description:
          'The practice of designing systems that protect human attention, judgment, memory, and interpretive capacity rather than exhausting them through unmanaged complexity.',
      },
    ],
  },
  {
    eyebrow: 'Stabilizing',
    title: 'Currently stabilizing',
    intro:
      'Concepts that have become more consistent across the work but are still being refined as the archive grows.',
    featured: [
      {
        title: 'Signal Integrity',
        description:
          'The degree to which information remains aligned with reality as it moves through systems, interfaces, institutions, incentives, and interpretation. Signal integrity is not a property of data alone. It is preserved or degraded by the structures that carry it.',
      },
      {
        title: 'Decision Systems',
        description:
          'The structures that determine what becomes visible, how options are framed, how uncertainty is handled, and where responsibility ultimately resides. A decision system begins before the moment of choice.',
      },
      {
        title: 'Operational Empathy',
        description:
          'Empathy translated into system behavior through workflows, defaults, escalation paths, and governance. It is not a tone or sentiment. It is the operational capacity to preserve dignity and context under pressure.',
      },
    ],
    related: [
      {
        title: 'Truth, Structured',
        href: '/writing/truth-structured',
        meta: 'Writing',
        description:
          'An essay on how truth is shaped upstream by systems that select, order, and frame information before interpretation begins.',
      },
      {
        title: 'System Architecture for Governed Intelligence',
        href: '/writing/system-architecture-for-governed-intelligence',
        meta: 'Writing',
        description:
          'A paper-style essay defining how auditability, control, and signal integrity become enforceable at the system level.',
      },
      {
        title: 'Designing Human-Governed AI in a Regulated Enterprise',
        href: '/writing/field-studies/wells-fargo',
        meta: 'Field Study',
        description:
          'A field study of governance, human oversight, interpretability, and scalable experimentation inside regulated AI systems.',
      },
    ],
    additionalTitle: 'Additional evolving concepts',
    additional: [
      {
        title: 'Human Judgment',
        description:
          'The interpretive human act of weighing context, uncertainty, consequence, responsibility, and values before action is taken.',
      },
      {
        title: 'Human-Governed Intelligence',
        description:
          'Intelligence systems designed so human direction, accountability, escalation, and judgment remain structurally present.',
      },
      {
        title: 'AI as Infrastructure',
        description:
          'The treatment of artificial intelligence as a civic, operational, and institutional layer rather than a standalone product or spectacle.',
      },
      {
        title: 'Institutional Transparency',
        description:
          'The degree to which an institution makes its reasoning, constraints, evidence, and decision pathways visible enough to be examined.',
      },
      {
        title: 'Decision Support',
        description:
          'Systems that help people perceive, compare, interpret, and act without transferring responsibility away from human judgment.',
      },
      {
        title: 'Interpretability',
        description:
          'The capacity to understand why a system produced a result, what inputs shaped it, and where uncertainty remains.',
      },
      {
        title: 'Auditability',
        description:
          'The ability to reconstruct what happened inside a system well enough to evaluate behavior, accountability, and consequence.',
      },
      {
        title: 'Reciprocal Intelligence',
        description:
          'The feedback relationship between intelligent systems and human behavior, where each shapes the other over time.',
      },
      {
        title: 'Operational Intelligence',
        description:
          'Intelligence expressed through workflows, roles, escalation paths, and repeatable decisions rather than insight alone.',
      },
      {
        title: 'Decision Architecture',
        description:
          'The design of how choices are structured, sequenced, framed, constrained, and made visible before a decision occurs.',
      },
      {
        title: 'Visible Understanding',
        description:
          'The use of AI and design to replace invisible complexity with forms people can inspect, question, and act upon.',
      },
      {
        title: 'Design Becomes Policy',
        description:
          'Design becomes policy the moment it ships because shipped systems constrain real choices and produce lived outcomes.',
      },
      {
        title: 'The System Decides First',
        description:
          'Decisions begin before the moment of choice, in the systems that select, rank, frame, hide, and make options available.',
      },
      {
        title: 'Truth Is Shaped Before It Is Interpreted',
        description:
          'Understanding begins upstream, where systems decide what information appears, how it is framed, and what context survives.',
      },
    ],
  },
  {
    eyebrow: 'Established',
    title: 'Foundational concepts',
    intro:
      'Stable concepts that anchor the project. These terms should eventually point into tag pages and collection views as the archive matures.',
    featured: [
      {
        title: 'Signal',
        href: '/writing/tag/signal',
        description:
          'Information that retains enough integrity to support judgment, interpretation, or action. Signal is not merely data. It is data that still carries meaning after passing through systems, incentives, context, and human interpretation.',
      },
      {
        title: 'Legibility',
        description:
          'The quality that makes a system, interface, institution, or situation understandable enough for informed action. Legibility does not require simplicity. It requires enough structure for people to know where they are, what matters, and what can be done.',
      },
      {
        title: 'Trust',
        href: '/writing/tag/trust',
        description:
          'Trust is not a message or a feature. It is an inference drawn from system behavior, especially under pressure. A system earns trust when its behavior remains coherent, recoverable, and accountable when conditions become difficult.',
      },
    ],
    related: [
      {
        title: 'Trust Is Not a Feature',
        href: '/writing/trust-is-not-a-feature',
        meta: 'Writing',
        description:
          'A foundational essay arguing that trust is inferred from system behavior rather than added through language or interface polish.',
      },
      {
        title: 'The Infrastructure of Belonging',
        href: '/writing/papers/the-infrastructure-of-belonging',
        meta: 'Research Paper',
        description:
          'A formal civic systems framework connecting belonging, infrastructure, connectors, continuity, and public trust.',
      },
      {
        title: 'Designing Dignity Inside Public Systems Under Stress',
        href: '/writing/field-studies/civic-systems',
        meta: 'Field Study',
        description:
          'A field study of navigability, dignity, and operational clarity inside public systems under pressure.',
      },
    ],
    additionalTitle: 'Additional established concepts',
    additional: [
      {
        title: 'Civic Systems',
        href: '/writing/tag/civic-systems',
        description:
          'The public institutions, infrastructure, and social systems that organize participation, trust, access, and belonging.',
      },
      {
        title: 'Civic Legibility',
        description:
          'The degree to which public systems can be understood, navigated, questioned, and used by the people they affect.',
      },
      {
        title: 'Civic Infrastructure',
        description:
          'The physical, administrative, social, and informational systems that allow public life to function.',
      },
      {
        title: 'Participation',
        description:
          'The ability to meaningfully enter, use, influence, or be represented by a system rather than merely being subject to it.',
      },
      {
        title: 'Belonging',
        href: '/writing/tag/belonging',
        description:
          'The condition of being recognized by a system, place, or community without having to prove one belongs there first.',
      },
      {
        title: 'Interaction Cost',
        description:
          'The effort, attention, uncertainty, and emotional labor required to move through a system or interface.',
      },
      {
        title: 'Cognitive Load',
        description:
          'The mental effort required to interpret information, make choices, remember context, and avoid error.',
      },
      {
        title: 'Affordance',
        description:
          'A visible or implied cue that suggests what action is possible, expected, or safe within a system.',
      },
      {
        title: 'Failure Mode',
        description:
          'A predictable way a system breaks, excludes, distorts, or produces harm under pressure.',
      },
      {
        title: 'Feedback Loop',
        description:
          'A cycle in which system outputs return as inputs, shaping future behavior, interpretation, or decisions.',
      },
      {
        title: 'Emergence',
        description:
          'Behavior or meaning that appears from the interaction of parts rather than from any single part alone.',
      },
      {
        title: 'Redundancy',
        description:
          'Additional capacity, pathways, or supports that allow a system or person to keep functioning when one layer fails.',
      },
      {
        title: 'Margin',
        description:
          'The spare capacity that allows error, delay, uncertainty, or disruption to be absorbed without collapse.',
      },
      {
        title: 'Resilience',
        description:
          'The ability to absorb pressure, adapt under strain, and preserve essential function without pretending nothing changed.',
      },
      {
        title: 'Single Point of Failure',
        description:
          'A dependency whose breakdown can compromise the larger system because no adequate backup, pathway, or substitute exists.',
      },
      {
        title: 'Compression',
        description:
          'The reduction of complexity into a simpler form, useful when handled carefully and dangerous when it erases what matters.',
      },
      {
        title: 'Continuity',
        href: '/writing/tag/continuity',
        description:
          'The preservation of function, memory, identity, or care across disruption, transition, and time.',
      },
      {
        title: 'Agency',
        href: '/writing/tag/agency',
        description:
          'The practical ability to act with meaningful choice, direction, and consequence inside the conditions one actually inhabits.',
      },
      {
        title: 'Scarcity',
        description:
          'A condition that reduces margin, narrows attention, changes the meaning of choices, and turns ordinary friction into threat.',
      },
      {
        title: 'Stability',
        description:
          'The condition in which enough supports hold long enough for judgment, recovery, planning, or participation to become possible.',
      },
      {
        title: 'Recognition',
        description:
          'The moment when a person, pattern, truth, or system becomes visible enough to be named honestly.',
      },
      {
        title: 'Narrative',
        description:
          'The story that organizes experience into meaning, sometimes clarifying reality and sometimes protecting distortion.',
      },
      {
        title: 'Collapse',
        description:
          'The point at which accumulated pressure, lost margin, or broken feedback overwhelms the supports that previously held.',
      },
      {
        title: 'Recovery',
        href: '/writing/tag/recovery',
        description:
          'The ongoing work of restoring honesty, agency, stability, and presence after collapse.',
      },
      {
        title: 'Institutional Authority',
        description:
          'The power of institutions to act, decide, classify, enforce, or allocate consequence on behalf of larger systems.',
      },
    ],
  },
];
