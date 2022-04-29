import React from "react";
import { FiMail } from "react-icons/fi";
import Header from "../../header/Header";
import Contacts from "./components/contacts/Contacts";
import MediaQuery from 'react-responsive';
import { BsArrowUpCircle } from 'react-icons/bs';
import { HashLink } from 'react-router-hash-link';
import styles from "./ContactMe.module.css";

const ContactMe = () => {
  return (
    <section id="contact-me">
      <Header
        name="Contact me"
        icon={<FiMail className="icon" size="28" />}
        textSecondary="Natalya Sentemova"
      />
      <Contacts />
      <MediaQuery minWidth={849}>
        <HashLink to="#top" className={styles.LinkToTheTop} smooth><BsArrowUpCircle size="22" /></HashLink>
      </MediaQuery>
    </section>
  );
};
export default ContactMe;
