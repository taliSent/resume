import { BsArrowUpCircle } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import Header from "../../header/Header";
import styles from "./ContactMe.module.css";
import Contacts from "./components/contacts/Contacts";
import Links from "./components/links/Links";

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
