import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";
import styles from "./Description.module.css";

type DescriptionProps = {
  showDetails: boolean;
};

const Description: React.FC<DescriptionProps> = ({
  showDetails,
}: DescriptionProps) => {
  const contactMeAnchor = "#contact-me";
  return (
    <div className={`${styles.Description} ${!showDetails && styles.Hidden}`}>
      I started as QA, worked as a designer, and made my way to front-end
      development.
      <br />
      Today I develop complex React components, such as multi-step forms, tables
      with filters, sorts, pagination and editing, full pages of content.
      {"  "}
      {/* Most of the projects that I contributed to were bank apps,
      designed to help users to monitor, analyze and update bank data.  */}
      I created a <span className={styles.Underline}>whole application</span>,
      designed for configuring and signing bank documents, as a sole developer.
      I prefer to work <span className={styles.Underline}>in a team</span>,
      though.
      {/* They were multi-page applications with authorization, role model and
      tables/widgets to showcase. */}
      <br />I worked with various libraries and technologies, such as{" "}
      <span className={styles.Underline}>TypeScript</span>, Redux, Node.js,
      Strorybook, Thrifts, Sass, BEM, Styled Components, material-ui, etc.{" "}
      <br /> I'm passionate to{"  "}
      <span className={styles.Underline}>study</span> the new and break through
      my comfort zone.
      <br />
      <span className={styles.Underline}>Code cleanliness</span> is important to
      me, so I adhere to KISS, DRY & separation of concerns.
      <br />
      {/* I'm passionate about coding and try to become better every day.  */}
      Most often, colleagues describe me as a{" "}
      {/* <span className={styles.Underline}>team player</span> who's  */}
      "nice to communicate with" : ){" "}
      <div className={styles.LinkContainer}>
        <HashLink className={styles.HashLink} to={contactMeAnchor} smooth>
          Communicate?{" "}
          <AiOutlineArrowRight size="15" className={styles.Arrow} />
        </HashLink>
      </div>
    </div>
  );
};

export default React.memo(Description);
