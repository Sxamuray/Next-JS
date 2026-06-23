export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "TaskFlow App",
    description:
      "A productivity web app with drag-and-drop boards, real-time updates, and team collaboration features.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "/images/project-taskflow.svg",
    link: "#",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description:
      "Clean weather dashboard with location search, 7-day forecasts, and animated data visualizations.",
    tech: ["React", "OpenWeather API", "CSS Modules"],
    image: "/images/project-weather.svg",
    link: "#",
  },
  {
    id: 3,
    title: "Dev Blog",
    description:
      "Personal blog built with markdown support, syntax highlighting, and optimized SEO performance.",
    tech: ["Next.js", "MDX", "Vercel"],
    image: "/images/project-blog.svg",
    link: "#",
  },
];

export const skills: Skill[] = [
  { name: "JavaScript / TypeScript", level: 90 },
  { name: "React & Next.js", level: 88 },
  { name: "HTML & CSS", level: 92 },
  { name: "Node.js", level: 75 },
  { name: "Git & GitHub", level: 85 },
  { name: "UI / UX Design", level: 70 },
];

export const contactInfo = {
  email: "developer@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  location: "San Francisco, CA",
};

export async function fetchPortfolioData() {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return {
    projects,
    skills,
    contactInfo,
    lastUpdated: new Date().toISOString(),
  };
}
