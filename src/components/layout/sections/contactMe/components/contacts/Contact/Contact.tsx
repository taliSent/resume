import React, { ReactNode } from "react";
import styles from "./Contact.module.css";

type ContactProps = {
  href: string;
  textPrimary: string;
  textSecondary: string;
  icon: ReactNode;
};

const Contact: React.FC<ContactProps> = ({
  href,
  textPrimary,
  textSecondary,
  icon,
}: ContactProps) => {
  return (
    <div data-aos="fade-up">
      <a href={href} className={styles.Contact}>
        {icon}
        <div className={styles.TextContainer}>
          <div className={styles.TextPrimary}>{textPrimary}</div>
          <div className={styles.TextSecondary}>{textSecondary}</div>
        </div>
      </a></div>
  );
};
export default Contact;
