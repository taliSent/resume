import React, { useState } from "react";
import styles from "./About.module.css";
import Buttons from "./components/Buttons/Buttons";
import Description from "./components/Description/Description";
import Numbers from "./components/Numbers/Numbers";

const About: React.FC = () => {
  const [showDetails, setShowDetails] = useState<boolean>(true);
  const handleClick = () => setShowDetails((prev) => !prev);

  return (
    <section id='about'>
      <div className={styles.About}>
        <img
          src={`${process.env.PUBLIC_URL}/img/photo.jpg`}
          alt=''
          width='200px'
          height='200px'
          className={styles.Photo}
        />
        <div className={styles.Text}>
          <div className={styles.Profession}>Frontend&nbsp;developer</div>
          <div className={styles.Stack}>React.js, Typescript</div>
          <Buttons showDetails={showDetails} onClick={handleClick} />
        </div>
      </div>
      <Numbers />
      <Description showDetails={showDetails} />
    </section>
  );
};
export default About;
