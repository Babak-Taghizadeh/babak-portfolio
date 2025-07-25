import {
  Layout,
  Database,
  Server,
  Palette,
  Zap,
  Smile,
  Star,
  Sparkles,
  Code2,
  Brain,
  BookOpen,
  Shirt,
  Heart,
  Music,
  Film,
  Dumbbell,
  Coffee,
  Monitor,
  Gamepad2,
  Tent,
  Languages,
} from "lucide-react";
import { IProject } from "./types";
import { TBlogCategory, TBlogSortOption } from "@/lib/types";

const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    icon: <Layout size={20} />,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Query (with SSR)",
      "Redux Toolkit",
      "SASS",
      "ShadCN UI",
      "Framer Motion",
      "ApexCharts",
      "React Hook Form",
    ],
  },
  {
    title: "Backend Development",
    icon: <Server size={20} />,
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Drizzle ORM",
      "CMS Architecture",
      "Authentication (JWT, Sessions)",
    ],
  },
  {
    title: "Database",
    icon: <Database size={20} />,
    skills: ["PostgreSQL", "MongoDB", "Drizzle ORM", "Mongoose"],
  },
  {
    title: "UI/UX Design",
    icon: <Palette size={20} />,
    skills: [
      "Figma",
      "Responsive Layout Planning",
      "Mobile-First Design",
      "Design Systems",
      "Accessibility Principles (a11y)",
      "Basic UX Writing Awareness",
    ],
  },
  {
    title: "Tools & Practices",
    icon: <Zap size={20} />,
    skills: [
      "Git & GitHub",
      "CI/CD Pipelines",
      "Vitest / Jest",
      "React Testing Library",
      "Docker (Basics)",
      "Performance Profiling",
      "Agile & Scrum",
      "Code Reviews",
    ],
  },
  {
    title: "Soft Skills",
    icon: <Smile size={20} />,
    skills: [
      "Team Collaboration (Remote & On-Site)",
      "Mentorship",
      "Problem Solving",
      "Time Management",
      "Attention to Detail",
      "Requirement Analysis",
    ],
  },
];

const NAVIGATION_MENU_ITEMS = [
  {
    label: "babak-talks",
    href: "/about",
  },
  {
    label: "babak-thinks",
    href: "/blogs",
  },
  {
    label: "babak-vibes",
    href: "/playlist",
  },
  {
    label: "Email",
  },
];

const PROJECT_CATEGORY_COLORS = {
  "Front-End": "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400",
  Fullstack:
    "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400",
  Backend:
    "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400",
  Other: "bg-gradient-to-r from-gray-500/20 to-slate-500/20 text-gray-400",
};

const PROJECT_CATEGORY_ICONS = {
  "Front-End": <Sparkles className="h-4 w-4" />,
  Fullstack: <Code2 className="h-4 w-4" />,
  Backend: <Star className="h-4 w-4" />,
  Other: <Star className="h-4 w-4" />,
};

const PROJECTS: IProject[] = [
  {
    title: "Sleep Clinic Platform (Dr. Vida Imani)",
    description:
      "A full-stack healthcare platform for a sleep clinic, built to enhance patient experience and clinic operations. Focused on performance, reusability, and secure infrastructure.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Drizzle ORM",
      "ShadCN UI",
      "Next Auth",
      "motion",
    ],
    githubUrl: "",
    liveUrl: "",
    category: "Fullstack",
    features: [
      "Streamlined content operations with a custom CMS, reducing publishing time by 55%",
      "Delivered a secure patient dashboard with load times under 200ms for a seamless UX",
      "Achieved 95+ Lighthouse scores across marketing pages through performance tuning",
      "Built a scalable component system ensuring 98% visual consistency across the app",
    ],
  },
  {
    title: "Solar Plant Monitoring System (Aral Studio)",
    description:
      "An enterprise-level monitoring platform migrated to React, focused on real-time performance, global collaboration, and massive data visualization.",
    technologies: [
      "React.js",
      "TypeScript",
      "Redux",
      "React-Query",
      "ApexCharts",
      "React Hook Form",
      "SASS",
      "React-i18next",
      "Yup",
    ],
    githubUrl: "",
    liveUrl: "",
    category: "Front-End",
    features: [
      "Reduced platform load time from 25s to under 3s by refactoring and optimizing state management",
      "Enabled real-time rendering of over 200,000 data points using performant charting techniques",
      "Facilitated seamless cross-timezone collaboration through modular architecture and multilingual support",
    ],
  },
  {
    title: "Hospitality Dashboard (Platin Studio)",
    description:
      "A management dashboard for a hospitality business with inventory tracking, team coordination, and analytics tools.",
    technologies: [
      "React.js",
      "TypeScript",
      "Axios",
      "Tailwind CSS",
      "React Hook Form",
      "Yup",
      "recharts",
    ],
    githubUrl: "",
    liveUrl: "",
    category: "Front-End",
    features: [
      "Enhanced team productivity by 30% through real-time staff and inventory tracking tools",
      "Improved form performance by 40% with optimized validation and rendering techniques",
      "Boosted accessibility to 90+ scores via semantic HTML and responsive design improvements",
    ],
  },
];

const BLOG_CATEGORIES: TBlogCategory[] = [
  "Technical",
  "Career",
  "Personal",
  "Industry",
];

const BLOG_SORT_OPTIONS: { value: TBlogSortOption; label: string }[] = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
];

const EXPERIENCES = [
  {
    title: "Full-Stack Developer",
    company: "Freelance – Dr. Imani Sleep Clinic",
    location: "Remote",
    period: "Apr 2025 – Present",
    description:
      "Working independently with stakeholders to scope, plan, and deliver full-stack web applications with a strong focus on UX, performance, and privacy. Responsible for architecture, UI systems, and DevOps decisions. Gained deep experience in managing end-to-end product lifecycles, setting coding standards, and maintaining long-term scalability across codebases.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Tailwind CSS",
      "Shadcn/UI",
      "Zod",
    ],
  },
  {
    title: "Lead Front-End Developer",
    company: "Aral Studio",
    location: "Remote",
    period: "Jan 2024 – Apr 2025",
    description:
      "Led front-end efforts across multiple high-impact platforms in a fully remote team. Worked closely with back-end engineers, product managers, and designers to shape scalable interfaces and streamline data-heavy dashboards. Took ownership of design systems, SEO foundations, and performance strategy. Mentored junior developers, reviewed codebase standards, and contributed to agile workflows across time zones.",
    technologies: [
      "React",
      "Next.js",
      "Redux",
      "React Query",
      "ApexCharts",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "React Developer",
    company: "Platin Studio",
    location: "On-site",
    period: "Sep 2021 – Dec 2023",
    description:
      "Developed and maintained responsive web applications for a wide range of clients. Collaborated closely with UI/UX designers to translate visual concepts into production-ready interfaces. Improved testing coverage and refactored complex form flows. Gained experience in agile delivery, sprint planning, and improving legacy front-end codebases for performance and maintainability.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Hook Form",
      "Yup",
      "Vitest",
      "MSW",
    ],
  },
  {
    title: "Front-End Developer",
    company: "IpekDev Co.",
    location: "On-site",
    period: "Oct 2020 – Sep 2021",
    description:
      "Joined as an early-career developer and contributed to various web projects across healthcare and small business domains. Translated Figma designs into interactive UIs, collaborated in peer code reviews, and worked within structured release cycles. Developed an understanding of modern front-end workflows, reusable components, and cross-browser accessibility standards.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Figma",
      "Git",
      "HTML5",
      "CSS3",
    ],
  },
];

const EDUCATION = [
  {
    degree: "Associate of Science in Computer Science",
    school: "Rezayi Technical Institute",
    location: "Tabriz, Iran",
    period: "2017 - 2019",
    description:
      "Studied programming fundamentals, C++, data structures, and logic design. Active in tech workshops and student-led coding sessions.",
  },
  {
    degree: "High School Diploma in Mathematics and Physics",
    school: "Rezayi High School",
    location: "Tabriz, Iran",
    period: "2014 - 2017",
    description:
      "Specialized in advanced mathematics and theoretical physics as part of Iran's Math-Physics track.",
  },
];

const SKILLS_DATA = [
  {
    Frontend: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "SASS", level: 85 },
      { name: "Redux Toolkit", level: 80 },
      { name: "React Query (SSR)", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "React Hook Form", level: 85 },
    ],
  },
  {
    "Backend & Database": [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "RESTful APIs", level: 80 },
      { name: "Authentication (JWT, Sessions)", level: 80 },
      { name: "CMS Architecture", level: 70 },
      { name: "Drizzle ORM", level: 85 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    "Tools & Practices": [
      { name: "Git & GitHub", level: 90 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Vitest / Jest", level: 80 },
      { name: "React Testing Library", level: 80 },
      { name: "Docker", level: 70 },
      { name: "Performance Profiling", level: 75 },
      { name: "Mobile-First Design", level: 85 },
      { name: "Responsive Layouts", level: 90 },
    ],
  },
];

const LANGUAGES = [
  { name: "English", flag: "🇬🇧", level: "Fluent" },
  { name: "Turkish", flag: "🇹🇷", level: "Native" },
  { name: "Persian (Farsi)", flag: "🇮🇷", level: "Fluent" },
  { name: "German", flag: "🇩🇪", level: "Elementary" },
];

const INTERESTS = [
  { title: "Philosophy", icon: <Brain className="text-primary h-4 w-4" /> },
  {
    title: "Poems & Literature",
    icon: <BookOpen className="text-primary h-4 w-4" />,
  },
  { title: "Fashion", icon: <Shirt className="text-primary h-4 w-4" /> },
  {
    title: "Family & Friendship",
    icon: <Heart className="text-primary h-4 w-4" />,
  },
  {
    title: "Playing Instruments",
    icon: <Music className="text-primary h-4 w-4" />,
  },
  { title: "Music & Movies", icon: <Film className="text-primary h-4 w-4" /> },
  {
    title: "Gym & Sports",
    icon: <Dumbbell className="text-primary h-4 w-4" />,
  },
  { title: "Coffee", icon: <Coffee className="text-primary h-4 w-4" /> },
  {
    title: "Reading Tech Blogs",
    icon: <Monitor className="text-primary h-4 w-4" />,
  },
  { title: "Gaming", icon: <Gamepad2 className="text-primary h-4 w-4" /> },
  {
    title: "Travel & Camping",
    icon: <Tent className="text-primary h-4 w-4" />,
  },
  {
    title: "Learning New Languages",
    icon: <Languages className="text-primary h-4 w-4" />,
  },
];

export {
  NAVIGATION_MENU_ITEMS,
  SKILL_CATEGORIES,
  PROJECT_CATEGORY_COLORS,
  PROJECT_CATEGORY_ICONS,
  PROJECTS,
  BLOG_CATEGORIES,
  BLOG_SORT_OPTIONS,
  EXPERIENCES,
  EDUCATION,
  SKILLS_DATA,
  LANGUAGES,
  INTERESTS,
};
