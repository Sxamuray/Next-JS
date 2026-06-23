import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { fetchPortfolioData, type Skill } from "@/data/portfolio";
import styles from "@/styles/About.module.css";

interface AboutProps {
  skills: Skill[];
}

export default function About({ skills }: AboutProps) {
  return (
    <>
      <Head>
        <title>About | Portfolio</title>
      </Head>

      <div className={styles.page}>
        <div className={styles.intro}>
          <Image
            src="/images/profile.svg"
            alt="Profile"
            width={200}
            height={200}
            className={styles.photo}
          />
          <div>
            <h1>About Me</h1>
            <p className={styles.lead}>
              I&apos;m a passionate developer who loves turning ideas into
              elegant, user-friendly applications. With a focus on clean code
              and thoughtful design, I build web experiences that are both
              beautiful and performant.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open source, or sketching UI
              concepts for side projects.
            </p>
          </div>
        </div>

        <section className={styles.skills}>
          <h2>Skills</h2>
          <div className={styles.skillList}>
            {skills.map((skill) => (
              <div key={skill.name} className={styles.skillItem}>
                <div className={styles.skillHeader}>
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className={styles.bar}>
                  <div
                    className={styles.barFill}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<AboutProps> = async () => {
  const data = await fetchPortfolioData();

  return {
    props: {
      skills: data.skills,
    },
  };
};
