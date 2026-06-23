import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { fetchPortfolioData, type Project } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";
import styles from "@/styles/Home.module.css";

interface HomeProps {
  featuredProjects: Project[];
  lastUpdated: string;
}

export default function Home({ featuredProjects, lastUpdated }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Portfolio</title>
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.greeting}>Hello, I&apos;m</p>
          <h1>Your Name</h1>
          <p className={styles.tagline}>
            Full-stack developer crafting clean, performant web experiences
            with modern tools.
          </p>
          <div className={styles.actions}>
            <Link href="/projects" className={styles.primaryBtn}>
              View Projects
            </Link>
            <Link href="/contact" className={styles.secondaryBtn}>
              Get in Touch
            </Link>
          </div>
        </div>
        <div className={styles.avatarWrap}>
          <Image
            src="/images/profile.svg"
            alt="Profile picture"
            width={280}
            height={280}
            priority
            className={styles.avatar}
          />
        </div>
      </section>

      <section className={styles.featured}>
        <div className={styles.sectionHeader}>
          <h2>Featured Work</h2>
          <Link href="/projects" className={styles.seeAll}>
            See all &rarr;
          </Link>
        </div>
        <div className={styles.grid}>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <p className={styles.updated}>
          Server-rendered at {new Date(lastUpdated).toLocaleString()}
        </p>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const data = await fetchPortfolioData();

  return {
    props: {
      featuredProjects: data.projects.slice(0, 2),
      lastUpdated: data.lastUpdated,
    },
  };
};
