import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/ProjectCard.module.css";
import type { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={240}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className={styles.tech}>
          {project.tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link href={project.link} className={styles.link}>
          View Project &rarr;
        </Link>
      </div>
    </article>
  );
}
