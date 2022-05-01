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
      <div data-aos="fade-up" >
        <a

          href={gitHubLink}
          className={styles.Link}
          target="_blank"
          rel="noreferrer">
          <FiGithub size="45" />
        </a>
      </div>

      <div data-aos="fade-up" data-aos-duration="500">
        <a
          href={linkedinLink}
          className={styles.Link}
          target="_blank"
          rel="noreferrer">
          <FaLinkedin size="45" />
        </a>
      </div>

    </div>

  );
};
export default Links;
