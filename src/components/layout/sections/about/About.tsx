import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useRef } from "react";
import styles from "./About.module.css";
import Buttons from "./components/Buttons/Buttons";
import Description from "./components/Description/Description";
import Numbers from "./components/Numbers/Numbers";
import { useParallax } from "@utils/parallax";

const About: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.1", "end end"],
  });
  const y = useParallax(scrollYProgress, 0, -250);
  return (
    <section id="about" aria-label="about me" ref={ref}>
      <div className={styles.About}>
        <motion.div className={styles.PhotoContainer} style={{ y }}>
          <motion.img
            src={"img/TaliLight4.png"}
            alt="Tali's picture"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "none" }}
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
