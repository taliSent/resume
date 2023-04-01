import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import styles from "./Links.module.css";

const LINKS_COLOR = "rgb(128, 124, 191)";

const Links: React.FC = () => {
  const GITHUB = "https://github.com/taliSent/";
  const LINKEDIN = "https://www.linkedin.com/in/natalya-sentemova-131a2baa/";

  return (
    <div className={styles.Links}>
      <div className={styles.Link}>
        <div data-aos='fade-up'>
          <a
            href={GITHUB}
            target='_blank'
            rel='noreferrer'
            aria-label='link to github'
          >
            <FiGithub size='45' color={LINKS_COLOR} />
          </a>
        </div>
      </div>

      <div data-aos='fade-up' data-aos-duration='800'>
        <div className={styles.Link}>
          <a
            href={LINKEDIN}
            className={styles.Link}
            target='_blank'
            rel='noreferrer'
            aria-label='link to linkedin'
          >
            <FaLinkedin size='45' color={LINKS_COLOR} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Links;
