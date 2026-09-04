type NavigationItem = {
  readonly label: string
  readonly href: `#${string}`
}

type ProfessionalHighlight = {
  readonly title: string
  readonly description: string
}

type DateRange = {
  readonly start: string
  readonly end: string
}

type ProfessionalExperience = {
  readonly company: string
  readonly role: string
  readonly period: DateRange
  readonly focusAreas: readonly string[]
}

type SelectedProject = {
  readonly name: string
  readonly organization: string
  readonly portfolioTitle: string
  readonly contributionAreas: readonly string[]
  readonly technologies?: readonly string[]
}

type SkillContext = 'Basic hands-on' | 'Hands-on exposure'

type SkillItem = {
  readonly name: string
  readonly context?: SkillContext
}

type SkillGroup = {
  readonly title: string
  readonly items: readonly SkillItem[]
}

type EducationEntry = {
  readonly qualification: string
  readonly institution: string
  readonly cgpa: string
  readonly distinctions: readonly string[]
}

type Certification = {
  readonly issuer: string
  readonly name: string
}

type ContactChannelType = 'email' | 'linkedin' | 'github' | 'resume'

type ContactChannel = {
  readonly type: ContactChannelType
  readonly label: string
  readonly href?: string
}

export type PortfolioData = {
  readonly siteIdentity: {
    readonly name: string
    readonly role: string
  }
  readonly navigation: readonly NavigationItem[]
  readonly hero: {
    readonly headline: string
    readonly summary: string
  }
  readonly about: string
  readonly professionalHighlights: readonly ProfessionalHighlight[]
  readonly professionalExperience: readonly ProfessionalExperience[]
  readonly selectedProjects: readonly SelectedProject[]
  readonly technicalSkills: readonly SkillGroup[]
  readonly qualityAndTesting: {
    readonly capabilities: readonly SkillItem[]
  }
  readonly education: readonly EducationEntry[]
  readonly certifications: readonly Certification[]
  readonly contact: {
    readonly location: string
    readonly channels: readonly ContactChannel[]
  }
}

const testingAndQaCapabilities = [
  { name: 'UAT' },
  { name: 'FAT' },
  { name: 'PAT' },
  { name: 'Functional testing' },
  { name: 'Regression verification' },
  { name: 'Test scripts' },
  { name: 'Defect investigation' },
  { name: 'Bug verification' },
] as const satisfies readonly SkillItem[]

export const portfolio = {
  siteIdentity: {
    name: 'Zulhusni Amir',
    role: 'Software Developer',
  },
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    headline:
      'Software Developer building and supporting enterprise systems across application, API, database, and testing layers.',
    summary:
      'Hands-on experience developing government and enterprise web systems using PHP, JavaScript, REST APIs, MySQL and Oracle, with involvement across implementation, integration, defect resolution, testing and technical documentation.',
  },
  about:
    'I work across more than just one layer of an application. My experience includes frontend and backend development, REST API integration, database troubleshooting, defect investigation, acceptance testing, and technical documentation within enterprise and government systems. I’m comfortable working in existing codebases, understanding business rules, and tracing issues across the application stack.',
  professionalHighlights: [
    {
      title: 'Full-Stack Development',
      description:
        'Frontend, backend, REST API, and database implementation.',
    },
    {
      title: 'Enterprise Systems',
      description:
        'Experience contributing to government digitalisation projects.',
    },
    {
      title: 'Quality & Testing',
      description:
        'UAT, FAT, PAT, functional verification, regression testing, and defect investigation.',
    },
    {
      title: 'Data & Integration',
      description:
        'Oracle, MySQL, REST API integration, data validation, and legacy-data analysis.',
    },
  ],
  professionalExperience: [
    {
      company: 'Metadata Systems Sdn. Bhd.',
      role: 'Software Developer',
      period: {
        start: 'September 2024',
        end: 'Present',
      },
      focusAreas: [
        'Enterprise web application development across frontend and backend layers',
        'REST API development and integration',
        'MySQL and Oracle database work',
        'Defect investigation, resolution, and application maintenance',
        'UAT, FAT, and PAT support',
        'Technical documentation',
        'Cross-functional collaboration throughout the software development lifecycle',
      ],
    },
  ],
  selectedProjects: [
    {
      name: 'eSPP — Sistem Pengambilan dan Perkhidmatan',
      organization: 'Suruhanjaya Perkhidmatan Pendidikan (SPP)',
      portfolioTitle: 'Government Recruitment & Service Management Platform',
      contributionAreas: [
        'Supported candidate processing, interview scheduling, appointment workflows, and academic-result processing.',
        'Implemented frontend interfaces, backend business rules, REST API endpoints, database queries, validation, and workflow logic.',
        'Investigated and resolved defects and supported UAT activities.',
      ],
      technologies: [
        'PHP',
        'JavaScript',
        'jQuery',
        'Bootstrap',
        'DataTables',
        'REST APIs',
        'MySQL',
        'Oracle',
      ],
    },
    {
      name: 'Malaysia Greenhouse Gas Emission Inventory System (MyGEIS)',
      organization: 'NRES',
      portfolioTitle: 'National Greenhouse Gas Data Management System',
      contributionAreas: [
        'Contributed to assigned backend and frontend functionality with hands-on exposure to C# and .NET Core.',
        'Supported defect investigation, database and integration work, and system testing.',
        'Contributed to BRS and SRS documentation.',
      ],
      technologies: [
        'C#',
        '.NET Core',
        'Databases',
        'Enterprise web development',
      ],
    },
    {
      name: 'MyAgriCensus 2024',
      organization: 'Department of Statistics Malaysia (DOSM)',
      portfolioTitle: 'National Agriculture Census Platform',
      contributionAreas: [
        'Worked on maintenance tickets through issue investigation and identification of affected components.',
        'Implemented bug fixes and system enhancements, followed by regression verification and troubleshooting.',
        'Contributed to BRS, SRS, and SDS documentation.',
      ],
    },
  ],
  technicalSkills: [
    {
      title: 'Programming',
      items: [
        { name: 'PHP' },
        { name: 'JavaScript' },
        { name: 'SQL' },
        { name: 'C#', context: 'Hands-on exposure' },
      ],
    },
    {
      title: 'Frontend & Web',
      items: [
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'jQuery' },
        { name: 'Bootstrap' },
        { name: 'DataTables' },
      ],
    },
    {
      title: 'Backend & Frameworks',
      items: [
        { name: 'Custom PHP Framework' },
        { name: 'Laravel', context: 'Basic hands-on' },
        { name: '.NET Core', context: 'Hands-on exposure' },
      ],
    },
    {
      title: 'Databases',
      items: [
        { name: 'Oracle Database' },
        { name: 'MySQL' },
        { name: 'MariaDB' },
      ],
    },
    {
      title: 'API & Integration',
      items: [
        { name: 'RESTful APIs' },
        { name: 'JSON' },
        { name: 'Postman' },
        { name: 'Request/response debugging' },
      ],
    },
    {
      title: 'Testing & QA',
      items: testingAndQaCapabilities,
    },
    {
      title: 'Tools & Delivery',
      items: [
        { name: 'Git' },
        { name: 'GitLab' },
        { name: 'GitHub' },
        { name: 'GitHub Desktop' },
        { name: 'VS Code' },
        { name: 'Docker' },
        { name: 'Laragon' },
        { name: 'Navicat' },
        { name: 'DBeaver' },
        { name: 'SSH' },
        { name: 'FortiClient VPN' },
      ],
    },
    {
      title: 'Documentation',
      items: [
        { name: 'BRS' },
        { name: 'SRS' },
        { name: 'SDS' },
        { name: 'UAT scripts' },
        { name: 'Data mapping' },
        { name: 'SDLC documentation' },
      ],
    },
  ],
  qualityAndTesting: {
    capabilities: testingAndQaCapabilities,
  },
  education: [
    {
      qualification:
        'Bachelor of Computer Science (Software Development) with Honours',
      institution: 'Universiti Sultan Zainal Abidin',
      cgpa: '3.84',
      distinctions: [
        'Gold Medal — Final Year Project Seminar 2024',
        "Dean's List Award",
      ],
    },
    {
      qualification: 'Diploma in Information Technology',
      institution: 'Universiti Sultan Zainal Abidin',
      cgpa: '3.72',
      distinctions: ["Dean's List Award"],
    },
  ],
  certifications: [
    {
      issuer: 'Microsoft',
      name: 'Power BI Data Analyst Associate',
    },
    {
      issuer: 'Microsoft',
      name: 'Azure Data Fundamentals',
    },
    {
      issuer: 'Cisco Networking Academy',
      name: 'CCNA: Introduction to Networks',
    },
    {
      issuer: 'Cisco Networking Academy',
      name: 'Switching, Routing and Wireless Essentials',
    },
  ],
  contact: {
    location: 'Malaysia',
    channels: [
      {
        type: 'email',
        label: 'Email',
        href: 'mailto:zulhusniamir1911@gmail.com',
      },
      {
        type: 'linkedin',
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/zulhusni-amir-bin-hasbi-b67a7a287',
      },
      {
        type: 'github',
        label: 'GitHub',
        href: 'https://github.com/HusniEmirs',
      },
      { type: 'resume', label: 'Resume' },
    ],
  },
} as const satisfies PortfolioData
