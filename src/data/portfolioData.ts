import {
  PersonalInfo,
  NavItem,
  SkillCategory,
  ProjectItem,
  AchievementItem,
  EducationItem,
  CodingPlatform,
} from '../types/portfolio';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Kartik Chaudhary',
  location: 'Agra, Uttar Pradesh, India',
  phone: '9259322302',
  email: 'kartikchau22@gmail.com',
  tagline: 'CSE (AI & DS) Student | Java Developer | Problem Solver',
  shortDescription:
    'I\'m a Computer Science student focused on Data Structures & Algorithms, competitive programming, AI & Data Science, and software development.',
  aboutStory: [
    'I am an undergraduate Computer Science Engineering student specializing in Artificial Intelligence & Data Science at GLA University. Driven by core computer science fundamentals, I spend most of my time sharpening algorithmic problem-solving skills in Java.',
    'My primary focus centers on Data Structures & Algorithms, competitive programming, and engineering structured, clean software systems. I actively participate in campus technical initiatives, including the GeeksforGeeks Campus Club, and continuously challenge myself through competitive programming problems and technical events.',
  ],
  educationBrief: {
    degree: 'B.Tech in Computer Science Engineering',
    specialization: 'Artificial Intelligence & Data Science',
    institution: 'GLA University',
    graduationYear: 2030,
    cpi: '7.62',
  },
};

export const NAV_LINKS: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Coding', href: '#coding' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/kartik-21-chaudhary',
  linkedin: 'https://www.linkedin.com/in/kartik-chaudhary-0125ba2a7/',
  leetcode: 'https://leetcode.com/u/kartikkk__021/',
  geeksforgeeks: 'https://www.geeksforgeeks.org/profile/kartikcvg36',
  email: 'kartikchau22@gmail.com',
  phone: '+919259322302',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Java', 'C', 'Python'],
  },
  {
    title: 'Computer Science',
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Problem Solving',
    ],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA'],
  },
  {
    title: 'Interests',
    skills: [
      'AI & Data Science',
      'Competitive Programming',
      'Full Stack Development',
      'Software Development',
    ],
  },
];

export const CODING_PLATFORMS: CodingPlatform[] = [
  {
    platform: 'LeetCode',
    handle: '@kartikkk__021',
    url: SOCIAL_LINKS.leetcode,
    statBadge: '200+ Problems Solved',
    description:
      'Daily problem solving in Java focusing on Arrays, Strings, Two Pointers, Linked Lists, Trees, and algorithmic time/space optimization.',
  },
  {
    platform: 'GeeksforGeeks',
    handle: '@kartikcvg36',
    url: SOCIAL_LINKS.geeksforgeeks,
    statBadge: 'Active Problem Solver',
    description:
      'Practicing foundational DSA topics, problem-of-the-day challenges, and campus coding contests.',
  },
  {
    platform: 'GitHub',
    handle: '@kartik-21-chaudhary',
    url: SOCIAL_LINKS.github,
    statBadge: 'Active Repositories',
    description:
      'Version-controlled solutions, coursework repositories, and software experiments.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'dsa-repo',
    title: 'DSA Problem Solving Repository',
    status: 'In Progress',
    description:
      'A structured collection of tested and optimized solutions to 200+ Data Structures & Algorithms problems across LeetCode, GeeksforGeeks, and technical challenges, implemented in Java and C with time and space complexity annotations.',
    technologies: ['Java', 'C', 'Data Structures', 'Algorithms', 'Git'],
    githubUrl: SOCIAL_LINKS.github,
  },
  {
    id: 'project-ai-ds',
    title: 'Project Coming Soon',
    status: 'Planned',
    description:
      'An applied Artificial Intelligence & Data Science project utilizing Python to analyze real-world datasets and implement machine learning workflows. Repository will be linked upon release.',
    technologies: ['Python', 'AI & Data Science', 'Data Analysis'],
  },
  {
    id: 'project-fullstack',
    title: 'Project Coming Soon',
    status: 'Planned',
    description:
      'A full-stack software development application focused on building responsive, modular architecture and RESTful integration. Currently in the architectural planning phase.',
    technologies: ['Full Stack Development', 'Software Development', 'Java'],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: '200+ LeetCode Problems Solved',
    subtitle: 'Competitive Programming & DSA',
    description:
      'Consistently practiced and solved over 200 coding problems covering arrays, two-pointers, hash tables, linked lists, trees, and recursion using Java.',
    tag: 'Coding Milestone',
    link: SOCIAL_LINKS.leetcode,
  },
  {
    title: 'GeeksforGeeks Campus Club Member',
    subtitle: 'GLA University Campus Community',
    description:
      'Selected member contributing to peer coding activities, technical workshops, and competitive problem-solving sessions on campus.',
    tag: 'Community',
    link: SOCIAL_LINKS.geeksforgeeks,
  },
  {
    title: 'Unstop 30-Day Problem of the Day Challenge',
    subtitle: 'Consistency & Algorithmic Discipline',
    description:
      'Successfully completed the consecutive 30-day algorithmic problem challenge on Unstop, building rigorous daily problem-solving habits.',
    tag: 'Challenge',
  },
  {
    title: 'Technical Events & Hackathons',
    subtitle: 'Collegiate Tech Contests',
    description:
      'Active participant in university-level coding events, coding sprints, and technical team hackathons.',
    tag: 'Hackathons',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    qualification: 'B.Tech in Computer Science Engineering',
    field: 'Specialization: Artificial Intelligence & Data Science',
    institution: 'GLA University, Mathura',
    periodOrYear: 'Expected Graduation: 2030',
    score: 'Current CPI: 7.62 / 10.0',
    statusBadge: 'Pursuing',
    details:
      'Core coursework in Data Structures, Algorithms, Object-Oriented Programming with Java, Discrete Mathematics, and Foundations of AI & Data Science.',
  },
  {
    qualification: 'Senior Secondary (Class XII)',
    field: 'Science / Mathematics Stream',
    institution: 'Senior Secondary Board',
    periodOrYear: 'Completed',
    score: 'Score: 73.2%',
  },
  {
    qualification: 'Secondary School (Class X)',
    field: 'General Academic Studies',
    institution: 'Secondary School Board',
    periodOrYear: 'Completed',
    score: 'Score: 69.0%',
  },
];

export const QUICK_CHAT_PROMPTS = [
  'Tell me about Kartik\'s LeetCode & DSA background',
  'What programming languages does Kartik know?',
  'What degree is Kartik pursuing at GLA University?',
  'Why should a tech company consider Kartik for an internship?',
];
