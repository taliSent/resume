import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import styles from "./Links.module.css";

const Links: React.FC = () => {
  const gitHubLink = "https://github.com/taliSent/";
  const linkedinLink =
    "https://www.linkedin.com/in/natalya-sentemova-131a2baa/";
  return (
    <div className={styles.Links}>
      <a href={gitHubLink} className={styles.Link} target="_blank" rel="noreferrer">
        <FiGithub size="45" />
      </a>

      <a href={linkedinLink} className={styles.Link} target="_blank" rel="noreferrer">
        <FaLinkedin size="45" />
      </a>
    </div>
  );
};
export default Links;
