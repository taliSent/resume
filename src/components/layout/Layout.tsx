import React, { useRef } from "react";
import { Clouds } from "./Clouds";
import styles from "./Layout.module.css";
import About from "./sections/about/About";
import BugHunt from "./sections/bugHunt/BugHunt";
import ContactMe from "./sections/contactMe/ContactMe";
import Experience from "./sections/education/Experience";
import RandomFact from "./sections/randomFact/RandomFact";
import Stack from "./sections/stack/Stack";
import Testimonials from "./sections/testimonials/Testimonials";

const Layout: React.FC = () => {
  const refAboutSection = useRef<HTMLDivElement>(null);
  return (
    <main className={styles.Container} id="container">
      <div
        ref={refAboutSection}
        className={styles.Container}
        style={{ position: "relative" }}
      >
        <Clouds refAboutSection={refAboutSection} />
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
