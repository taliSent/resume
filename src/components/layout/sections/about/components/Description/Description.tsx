import React, { useEffect, useState } from "react";
import styles from "./Description.module.css";

type DescriptionProps = {
  showDetails: boolean;
}

const Description: React.FC<DescriptionProps> = ({ showDetails }: DescriptionProps) => {
  return (
    <div
      className={`${styles.Description} ${!showDetails && styles.Hidden}`}
    >Hello! My Name is Nataly. I've come from QA to what I love the most - <span className={styles.Underline}>frontend development.</span>
      <br />
      I've been working on a project job for <span className={styles.Underline}>three years</span> now. On some of these projects I worked solely, on some of them - in a team of specialists. Whenever necessary, I learn all the new technologies needed for the project.
      <br />
      I work remotely just as effective as in office. Currently I live in Armenia, but I would prefer to <span className={styles.Underline}>relocate.</span>
      <br />
      Web-development is not only my job, it's also my <span className={styles.Underline}>hobby</span>. I love learning new features, taking courses, marathons, and practicing on my own.
      <br />
      My goal is to create <span className={styles.Underline} data-replace="inspiring">comfortable</span> working atmosphere for my clients, my collegues and myself.
    </div>
  );
};

export default Description;
