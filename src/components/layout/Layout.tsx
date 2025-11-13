import React from "react";
import About from "./sections/about/About";
import ContactMe from "./sections/contactMe/ContactMe";
import Experience from "./sections/education/Experience";
import Stack from "./sections/stack/Stack";
import Testimonials from "./sections/testimonials/Testimonials";
import styles from "./Layout.module.css";
import { Route, Routes } from "react-router";

const Layout: React.FC = () => {
  return (
    <div className={styles.Container}>
      <About />
      <Stack />
      <Experience />
      <Testimonials />
      <ContactMe />
    </div>
  );
};
export default Layout;
