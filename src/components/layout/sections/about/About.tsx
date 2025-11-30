import { motion } from "framer-motion";
import React from "react";
import styles from "./About.module.css";
import Buttons from "./components/Buttons/Buttons";
import Description from "./components/Description/Description";
import Numbers from "./components/Numbers/Numbers";

const About: React.FC = () => {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start 0.1", "end end"],
  // });
  // const y = useParallax(scrollYProgress, 0, -250);
  return (
    <section id="about" aria-label="about me">
      <div className={styles.About}>
        <motion.div
          initial={{ opacity: 0, filter: "blur(4px) brightness(2)" }}
          whileInView={{ opacity: 1, filter: "none" }}
          transition={{ duration: 0.6 }}
          className={styles.PhotoContainer}
        >
          <motion.img
            src={"img/TaliPurple.webp"}
            alt="Tali's picture"
            width={275}
            height={275}
            className={styles.Photo}
          />
          <div className={styles.PhotoFrame} />
        </motion.div>
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
