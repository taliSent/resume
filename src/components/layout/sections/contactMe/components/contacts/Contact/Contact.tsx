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
    <li>
      <a href={href} className={styles.Contact} aria-label={textSecondary}>
        {icon}
        <div className={styles.TextContainer}>
          <div className={styles.TextPrimary}>{textPrimary}</div>
          <div className={styles.TextSecondary}>{textSecondary}</div>
        </div>
      </a>
    </li>
  );
};
export default Contact;
