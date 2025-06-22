"use client";

import styles from "./page.module.css";

const Home = () => {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.ngoName}>Contribution to Women and Children</h1>
          <h2 className={styles.slogan}>
            Empowering Women. Nurturing Children.
          </h2>
          <p>
            We’re committed to building a better world for women and children
            through education, support, and advocacy.
          </p>
          <a href="#projects" className={styles.ctaButton}>
            Explore Our Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
