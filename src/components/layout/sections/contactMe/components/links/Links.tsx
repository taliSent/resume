import { motion } from "framer-motion";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import styles from "./Links.module.css";
// import { ThemeContext } from "../../../../../../context/context";

const GITHUB = "https://github.com/taliSent/";
const LINKEDIN = "https://www.linkedin.com/in/natalya-sentemova/";

const Links: React.FC = () => {
  // todo: move it to css
  const LINKS_COLOR = "#5D59D9";
  // fade-up x2
  return (
    <div className={styles.Links}>
      <motion.div
        className={styles.Link}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -10 }}
        transition={{ease: "easeInOut", duration: 0.4}}
      >
        <div>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            aria-label="link to github"
          >
            <FiGithub size="45" color={LINKS_COLOR} />
          </a>
        </div>
      </motion.div>

      <div>
        <motion.div
          className={styles.Link}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          transition={{ease: "easeInOut", duration: 0.4}}
        >
          <a
            href={LINKEDIN}
            className={styles.Link}
            target="_blank"
            rel="noreferrer"
            aria-label="link to linkedin"
          >
            <FaLinkedin size="45" color={LINKS_COLOR} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};
export default Links;
