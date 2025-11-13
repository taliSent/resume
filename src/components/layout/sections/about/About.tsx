import React from "react";
import styles from "./About.module.css";
import Buttons from "./components/Buttons/Buttons";
import Description from "./components/Description/Description";
import Numbers from "./components/Numbers/Numbers";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" aria-label="about me">
      <div className={styles.About}>
        <motion.img
          src={"img/Tali2.png"}
          alt="Tali's picture"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "none" }} 
          className={styles.Photo}
        />
        <div className={styles.PhotoFrame} />
        <div className={styles.Text}>
          <div className={styles.Profession}>Frontend developer</div>
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
