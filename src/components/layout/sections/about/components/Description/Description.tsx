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
      {/* Communicate? */}
      {/* Frontend developer with 3 years of experience. Skilled at React.js ,
      Typescript, HTML & CSS, Figma. Successfully finished more then 6 different
      projects, most of which were solid bank applications with complex logic.
      Worked in a team of specialists and as a sole developer. Adhere to KISS,
      DRY & separation of concerns. Eager to create scalable & maintainable
      interfaces users will love. */}
      {/* Hello! My Name is Natalya. I've come a long way from QA to the specialty I
      love the most -{" "}
      <span className={styles.Underline}>frontend development.</span>
      <br />
      I've been working on a project job for{" "}
      <span className={styles.Underline}>three years</span> now. On some of
      these projects I worked as a sole developer, on some of them - in a team
      of specialists. When necessary, I learn all the new technologies needed
      for the project.
      <br />I work remotely just as effective as in office. Currently, I live in
      Russia, but I would prefer to{" "}
      <span className={styles.Underline}>relocate.</span>
      <br />
      Web-development is not only my job, it's also my{" "}
      <span className={styles.Underline}>hobby</span>. I like learning new
      features, taking courses and challenges.
      <br />
      My goal is to create a{" "}
      <span className={styles.Underline}>comfortable</span> workspace for my
      colleagues and myself. */}
    </div>
  );
};

export default React.memo(Description);
