import React from "react";
import styles from "./About.module.css";
import Buttons from "./components/Buttons/Buttons";
import Description from "./components/Description/Description";
import Numbers from "./components/Numbers/Numbers";
import animationData from "./coding-girl.json";
import Lottie from "react-lottie";
import { TypeAnimation } from "react-type-animation";
import { isMobile } from "react-device-detect";

const ANIMATION_SIZE = isMobile ? 300 : 400;

const About: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section id="about" aria-label="about me">
      <div className={styles.About}>
        <Lottie
          options={defaultOptions}
          height={ANIMATION_SIZE}
          width={ANIMATION_SIZE}
        />
        <div className={styles.Text}>
          <TypeAnimation
            sequence={["Frontend developer", 4000, "Natalia Sentemova", 3000]}
            wrapper="span"
            speed={20}
            deletionSpeed={10}
            className={styles.Profession}
            repeat={0}
          />

          <div className={styles.Stack}>React.js, Typescript</div>
          <Buttons />
        </div>
      </div>
      <Numbers />
      <Description />
    </section>
  );
};
export default About;

/* <div className={styles.Profession}>Natalia&nbsp;Sentemova</div>*/

/* <div className={styles.Profession}>Frontend&nbsp;developer</div> */
