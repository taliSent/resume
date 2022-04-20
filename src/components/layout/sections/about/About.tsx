import React, { useState } from "react";
import styles from "./About.module.css";
import Buttons from "./components/Buttons/Buttons";
import Numbers from "./components/Numbers/Numbers";

const About: React.FC = () => {
  const [showDetails, setShowDetails] = useState<boolean>(true);
  const handleClick = () => setShowDetails((prev) => !prev);

  return (
    <section id="about">
      <div className={styles.About}>
        <img src="img/photo.jpg" alt="" className={styles.Photo} loading="lazy" />
        <div className={styles.Text}>
          <div className={styles.Profession}>Frontend developer</div>
          <div className={styles.Stack}>React.js, Typescript</div>
          <Buttons showDetails={showDetails} onClick={handleClick} />
        </div>
      </div>
      <Numbers />
      <div
        className={`${styles.Description} ${!showDetails && styles.Hidden}`}
      >
          Hello! My Name is Nataly. I've come a long way from QA to what I love the most - frontend developement.
          <br />
          I've been working on a project job for almost three years now. On some
          of these projects I worked solely, on some of them - in a team of
          specialists. For all of them I used React, but, whenever necessary, I
          learned all the new technologies needed for the project.
          <br /> I usually work remotely. I'm currently in Armenia, but I prefere
          to relocate.
      </div>
    </section>
  );
};
export default About;
