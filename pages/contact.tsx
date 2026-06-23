import Head from "next/head";
import { GetServerSideProps } from "next";
import { fetchPortfolioData } from "@/data/portfolio";
import styles from "@/styles/Contact.module.css";

interface ContactProps {
  email: string;
  github: string;
  linkedin: string;
  location: string;
}

export default function Contact({
  email,
  github,
  linkedin,
  location,
}: ContactProps) {
  return (
    <>
      <Head>
        <title>Contact | Portfolio</title>
      </Head>

      <div className={styles.page}>
        <header className={styles.header}>
          <h1>Get in Touch</h1>
          <p>
            Have a project in mind or just want to say hello? I&apos;d love to
            hear from you.
          </p>
        </header>

        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <span className={styles.label}>Email</span>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Location</span>
              <span>{location}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>GitHub</span>
              <a href={github} target="_blank" rel="noopener noreferrer">
                github.com/yourusername
              </a>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>LinkedIn</span>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                linkedin.com/in/yourusername
              </a>
            </div>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your message..."
              />
            </div>
            <button type="submit" className={styles.submit}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<ContactProps> = async () => {
  const data = await fetchPortfolioData();

  return {
    props: {
      email: data.contactInfo.email,
      github: data.contactInfo.github,
      linkedin: data.contactInfo.linkedin,
      location: data.contactInfo.location,
    },
  };
};
