"use client";

import Image from "next/image";
import styles from "./project.module.css";

const Project = ({ title, description, images, partners, status }) => {
  return (
    <div className={styles.projectCard}>
      {status && (
        <div
          className={`${styles.statusBadge} ${
            status === "ongoing" ? styles.ongoing : styles.completed
          }`}
        >
          {status === "ongoing" ? "In Progress" : "Completed"}
        </div>
      )}
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.images}>
        {images.map((image, index) => (
          <Image
            key={index}
            className={styles.image}
            src={image}
            width={300}
            height={200}
            alt={title}
          />
        ))}
      </div>
      <p className={styles.description}>{description}</p>
      {partners ? (
        <span>
          <h4>Partners:</h4>
          {partners.map((partner, index) => (
            <p key={index} className={styles.partner}>
              {partner}
            </p>
          ))}
        </span>
      ) : null}
    </div>
  );
};

export default Project;
