import React from "react";
import { BsTelegram } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Contact from "./Contact/Contact";
import styles from "./Contacts.module.css";

const myTg = "https://t.me/TaliSent";
const myMail = "ns.sent@yandex.ru";
const myPhone = "+3043068596";

const Contacts: React.FC = () => {
  return (
    <div className={styles.Contacts}>
      <Contact
        href={myTg}
        textPrimary="Text me"
        textSecondary="TaliSent"
        icon={<BsTelegram className={styles.Icon} />}
      />
      <Contact
        href={`mailto: ${myMail}`}
        textPrimary="Email me"
        textSecondary="ns.sent@yandex.ru"
        icon={<MdOutlineAlternateEmail className={styles.Icon} />}
      />
      <Contact
        href={`tel: ${myPhone}`}
        textPrimary="Call me"
        textSecondary={myPhone}
        icon={<FiPhone className={styles.Icon} />}
      />
    </div>
  );
};
export default Contacts;
