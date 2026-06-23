import Head from "next/head";
import { GetServerSideProps } from "next";
import { fetchPortfolioData, type Project } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";
import styles from "@/styles/Projects.module.css";

interface ProjectsProps {
  projects: Project[];
  totalCount: number;
}

export default function Projects({ projects, totalCount }: ProjectsProps) {
  return (
    <>
      <Head>
        <title>Projects | Portfolio</title>
      </Head>

      <div className={styles.page}>
        <header className={styles.header}>
          <h1>Projects</h1>
          <p>
            A collection of {totalCount} projects showcasing my work in web
            development, design, and problem solving.
          </p>
        </header>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<ProjectsProps> = async () => {
  const data = await fetchPortfolioData();

  return {
    props: {
      projects: data.projects,
      totalCount: data.projects.length,
    },
  };
};
