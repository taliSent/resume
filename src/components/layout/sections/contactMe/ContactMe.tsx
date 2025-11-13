import React from "react";
import { FiMail } from "react-icons/fi";
import Header from "../../header/Header";
import Contacts from "./components/contacts/Contacts";
import MediaQuery from "react-responsive";
import { BsArrowUpCircle } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";
import styles from "./ContactMe.module.css";
import Links from "./components/links/Links";
import { motion } from "motion/react";

const ContactMe = () => (
  <section id="contact-me" aria-label="contact me">
    <Header
      name="Contact me"
      icon={<FiMail className="icon" size="28" />}
      textSecondary="Natalia Sentemova"
    />
    <div>
      <Contacts />
      <Links />
    </div>
    <HashLink
      to="#top"
      smooth
      className={styles.LinkToTheTop}
      aria-label="to the top of the page"
    >
      <BsArrowUpCircle size="22" />
    </HashLink>
  </section>
);

export default ContactMe;
