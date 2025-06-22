"use client";

import { useEffect, useState } from "react";

import styles from "./scroll-progress.module.css";

const ScrollProgress = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollTop(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.progressContainer}>
      <div
        className={styles.progressBar}
        style={{ width: `${scrollTop}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
