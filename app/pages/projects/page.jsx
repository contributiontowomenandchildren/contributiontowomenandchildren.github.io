"use client";

import { useState } from "react";
import Ongoing from "./ongoing/page";
import Completed from "./completed/page";

import styles from "./page.module.css";

const Projects = ({ id }) => {
  const [activeTab, setActiveTab] = useState("ongoing");

  return (
    <section id={id} className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.tabs}>
        <button
          className={activeTab === "ongoing" ? styles.active : ""}
          onClick={() => setActiveTab("ongoing")}
          aria-selected={activeTab === "ongoing"}
          aria-controls="ongoing-content"
          id="ongoing-tab"
          role="tab"
        >
          Ongoing
        </button>
        <button
          className={activeTab === "completed" ? styles.active : ""}
          onClick={() => setActiveTab("completed")}
          aria-selected={activeTab === "completed"}
          aria-controls="completed-content"
          id="completed-tab"
          role="tab"
        >
          Completed
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === "ongoing" ? (
          <Ongoing
            id="ongoing-content"
            aria-labelledby="ongoing-tab"
            role="tabpanel"
          />
        ) : (
          <Completed
            id="completed-content"
            aria-labelledby="completed-tab"
            role="tabpanel"
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
