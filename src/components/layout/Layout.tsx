import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { useParallax } from "src/utils/parallax";
import styles from "./Layout.module.css";
import About from "./sections/about/About";
import BugHunt from "./sections/bugHunt/BugHunt";
import ContactMe from "./sections/contactMe/ContactMe";
import Experience from "./sections/education/Experience";
import RandomFact from "./sections/randomFact/RandomFact";
import Stack from "./sections/stack/Stack";
import Testimonials from "./sections/testimonials/Testimonials";

const Layout: React.FC = () => {
  const refAboutSection = useRef(null);
  const { scrollYProgress } = useScroll({ target: refAboutSection });
  // todo: separate the cloud components
  const xFirstCloud = useParallax(scrollYProgress, 0, 400);
  const xSecondCloud = useParallax(scrollYProgress, 0, 200);
  return (
    <main className={styles.Container} id="container">
      <div
        ref={refAboutSection}
        className={styles.Container}
        style={{ position: "relative" }}
      >
        <motion.img
          src="img/cloud1.webp"
          className={styles.Cloud1}
          aria-hidden={true}
          style={{ x: xFirstCloud, scale: 1.5 }}
          alt=""
        />
        <motion.img
          src="img/cloud.webp"
          className={styles.Cloud2}
          style={{ x: xSecondCloud, scale: 1.5 }}
          aria-hidden={true}
          alt=""
        />
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
