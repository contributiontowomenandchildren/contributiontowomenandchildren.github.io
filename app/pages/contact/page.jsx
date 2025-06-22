"use client";

import Image from "next/image";
import styles from "./page.module.css";

const Contact = () => (
  <section id="contact" className={styles.section}>
    <h2>Contact Us</h2>
    <div className={styles.logoContainer}>
      <Image
        className={styles.image}
        src="/logo.jpg"
        width={200}
        height={200}
        alt="Logo"
      />
    </div>
    <p className={styles.paragraph}>
      We’d love to hear from you! Whether you’re looking to get involved,
      support our mission, or simply learn more about our work — we’re here to
      connect.
    </p>
    <p className={styles.paragraph}>
      Email:{" "}
      <a
        className={styles.link}
        href="mailto:contributiontowomenandchildren@gmail.com"
      >
        contributiontowomenandchildren@gmail.com
      </a>
    </p>
  </section>
);

export default Contact;
