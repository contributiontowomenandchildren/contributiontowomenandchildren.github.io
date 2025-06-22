import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Contribution to Women and Children
      </p>

      <a
        href="https://www.facebook.com/ajakc.ut.yun.kananc.ev.erexanerin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={styles.socialLink}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#228b22"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          role="img"
          aria-hidden="true"
        >
          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12Z" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
