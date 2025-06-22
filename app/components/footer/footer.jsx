import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Contribution to Women and Children
      </p>
    </footer>
  );
};

export default Footer;
