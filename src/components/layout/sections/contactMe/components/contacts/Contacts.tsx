import React from "react";
import CONTACTS from "./constants";
import Contact from "./Contact/Contact";
import styles from "./Contacts.module.css";

const Contacts: React.FC = () => {
  return (
    <ul className={styles.Contacts}>
      {CONTACTS.map(({ href, textPrimary, textSecondary, icon }) => (
        <Contact
          href={href}
          textPrimary={textPrimary}
          textSecondary={textSecondary}
          icon={icon}
          key={href}
        />
      ))}
    </ul>
  );
};
export default Contacts;
