"use client";

import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.navbarItem} href="#home">
        Home
      </a>
      <a className={styles.navbarItem} href="#projects">
        Projects
      </a>
      <a className={styles.navbarItem} href="#about">
        About
      </a>
      <a className={styles.navbarItem} href="#contact">
        Contact
      </a>

      <a
        href="https://rearmenia.com/hy/fundraisers/dilijan-eco-camp?tab=story&fbclid=IwY2xjawLEhGtleHRuA2FlbQIxMQBicmlkETF4YjFlRVd2Nmc3b1RIc1BsAR43i0wOzvvzGcrDIHkOSdJKLdxaLdnxDW_Qc7ADZkUrUgzmrqogGgY8x2PbKg_aem_CnQssthr7nA4YBtFDPmCQA"
        className={styles.donateBtn}
        target="_blank"
        rel="noopener noreferrer"
      >
        Donate
      </a>
    </nav>
  );
};

export default Navbar;
