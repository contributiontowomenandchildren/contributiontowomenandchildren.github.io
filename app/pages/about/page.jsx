"use client";

import styles from "./page.module.css";

const About = () => (
  <section id="about" className={styles.section}>
    <h2>About Us</h2>

    <h3>Our Mission</h3>
    <p>
      Our mission is to promote the protection of the rights of women, youth,
      and children in Armenia, foster healthy lifestyles, and ensure dignified
      living conditions for all.
    </p>

    <h3>Our Vision</h3>
    <p>
      We envision a democratic Armenia where human rights are respected, and
      people live healthy and fulfilling lives.
    </p>

    <h3>Who We Are</h3>
    <p>
      “Contribution to Women and Children” NGO (CWC NGO) is a voluntary,
      independent, non-profit organization established in accordance with the
      Constitution and laws of the Republic of Armenia, international treaties,
      and our internal charter.
    </p>
    <ul className={styles.list}>
      <li>📍 Operating both in Armenia and internationally.</li>
      <li>
        🧩 Guided by principles of legality, honesty, non-discrimination, and
        accountability.
      </li>
      <li>
        🤝 Collaborating with public institutions, NGOs, international bodies,
        and foundations.
      </li>
      <li>
        🏠 Located in Dilijan: Kalinin St. 87, apt. 20, Tavush Province,
        Armenia.
      </li>
    </ul>

    <h3>Our Name</h3>
    <p>
      <strong>In Armenian:</strong> «Աջակցություն կանանց և երեխաներին» ՀԿ (ԱԿԵ
      ՀԿ)
      <br />
      <strong>In Russian:</strong> «Содействие женщинам и детям» НПО (СЖД НПО)
      <br />
      <strong>In English:</strong> “Contribution to Women and Children” NGO (CWC
      NGO)
    </p>

    <h3>Our Symbol</h3>
    <p>
      The organization’s emblem is a stork standing on one leg with three chicks
      in a nest, with three bamboos rising behind them — symbolizing care,
      growth, and protection.
    </p>

    <h3>Our Objectives</h3>
    <ul className={styles.list}>
      <li>📢 Promote the rights of women, youth, and children in Armenia.</li>
      <li>
        🧑‍⚕️ Help address legal, health, social, cultural, and everyday
        challenges.
      </li>
      <li>🌍 Learn from international best practices and share insights.</li>
      <li>🌐 Build partnerships with local and international organizations.</li>
      <li>
        🎓 Organize seminars, conferences, and free trainings to empower
        communities.
      </li>
      <li>
        💰 Provide financial and material aid (within means) for education and
        healthcare.
      </li>
      <li>
        💪 Foster healthy lifestyles and a strong, moral, and educated society.
      </li>
      <li>🚫 Combat violence, discrimination, and harmful societal norms.</li>
      <li>🌱 Promote environmental protection for future generations.</li>
    </ul>

    <h3>Our Belief</h3>
    <p>
      We believe that the secrets of success lie within us, and that recognizing
      our inner strength is the key to overcoming our challenges.
    </p>
  </section>
);

export default About;
