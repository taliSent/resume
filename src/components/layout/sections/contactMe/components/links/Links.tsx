import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import styles from "./Links.module.css";

const HEADER_COLOR = "rgb(128, 124, 191)";

const Links: React.FC = () => {
  const gitHubLink = "https://github.com/taliSent/";
  const linkedinLink =
    "https://www.linkedin.com/in/natalya-sentemova-131a2baa/";


  return (
    <div className={styles.Links}>
      <div data-aos="fade-up">
        <div className={styles.Link}>
          <a

            href={gitHubLink}
            target="_blank"
            rel="noreferrer">
            <FiGithub size="45" color={HEADER_COLOR} />
          </a>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="800">
        <div className={styles.Link}>
          <a
            href={linkedinLink}
            className={styles.Link}
            target="_blank"
            rel="noreferrer">
            <FaLinkedin size="45" color={HEADER_COLOR} />
          </a>
        </div>

      </div>

    </div>

  );
};
export default Links;
