import React, { useRef } from "react";
import About from "./sections/about/About";
import ContactMe from "./sections/contactMe/ContactMe";
import Experience from "./sections/education/Experience";
import Stack from "./sections/stack/Stack";
import Testimonials from "./sections/testimonials/Testimonials";
import styles from "./Layout.module.css";
import BugHunt from "./sections/bugHunt/BugHunt";
import RandomFact from "./sections/randomFact/RandomFact";
import MediaQuery from "react-responsive";
import { useParallax } from "@utils/parallax";
import { motion, useScroll } from "motion/react";

const Layout: React.FC = () => {
  const refAboutSection = useRef(null);
  const { scrollYProgress } = useScroll({ target: refAboutSection });
  // todo: separate the cloud components
  const xFirstCloud = useParallax(scrollYProgress, 0, 200);
  const xSecondCloud = useParallax(scrollYProgress, 0, 200);
  return (
    <main className={styles.Container} id="container">
      <div
        ref={refAboutSection}
        className={styles.Container}
        style={{ position: "relative" }}
      >
        <MediaQuery minWidth={847}>
          <motion.img
            src="img/cloud.png"
            className={styles.Cloud1}
            aria-hidden={true}
            style={{ x: xFirstCloud }}
            alt=""
          />
          <motion.img
            src="img/cloud.png"
            className={styles.Cloud2}
            style={{ x: xSecondCloud }}
            aria-hidden={true}
            alt=""
          />
        </MediaQuery>
        <About />
      </div>
      <Stack />
      <Experience />
      <Testimonials />
      <BugHunt />
      <RandomFact />
      <ContactMe />
    </main>
  );
};
export default Layout;
