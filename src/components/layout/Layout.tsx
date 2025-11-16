import React from "react";
import About from "./sections/about/About";
import ContactMe from "./sections/contactMe/ContactMe";
import Experience from "./sections/education/Experience";
import Stack from "./sections/stack/Stack";
import Testimonials from "./sections/testimonials/Testimonials";
import styles from "./Layout.module.css";
import BugHunt from "./sections/bugHunt/BugHunt";
import RandomFact from "./sections/randomFact/RandomFact";

const Layout: React.FC = () => {
  return (
    <div className={styles.Container} id="container">
      <About />
      <Stack />
      <Experience />
      <Testimonials />
      <BugHunt />
      <RandomFact />
      <ContactMe />
    </div>
  );
};
export default Layout;
