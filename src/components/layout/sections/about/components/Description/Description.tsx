import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";
import styles from "./Description.module.css";

const Description: React.FC = () => {
  const contactMeAnchor = "#contact-me";
  return (
    <div className={styles.Description}>
      I started as a QA engineer, worked as a designer, and made my way into
      frontend development.
      <br />
      Today I create <span className={styles.Underline}>complex</span> React
      applications, such as video editor, or a whole application, designed for
      configuring and signing bank documents. I work as a{" "}
      <span className={styles.Underline}>sole developer</span> and{" "}
      <span className={styles.Underline}>in a team</span>.
      <br />I worked with various libraries and technologies, such as{" "}
      <span className={styles.Underline}>TypeScript</span>, Redux, Node.js,
      Strorybook, Thrifts, Sass, BEM, Styled Components, material-ui, etc.{" "}
      <br />
      <span className={styles.Underline}>Code quality</span> is important to me,
      so I adhere to KISS, DRY & SOLID.
      <br />
      Most often, colleagues describe me as a "nice to communicate with" : ){" "}
      <div className={styles.LinkContainer}>
        <HashLink className={styles.HashLink} to={contactMeAnchor} smooth>
          Communicate?{" "}
          <AiOutlineArrowRight size="15" className={styles.Arrow} />
        </HashLink>
      </div>
    </div>
  );
};

export default Description;
