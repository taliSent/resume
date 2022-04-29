import React from "react";
import styles from "./Number.module.css";

type NumberProps = {
  number: string;
  text: string;
  className: string;
};

const Number: React.FC<NumberProps> = ({
  number, text, className
}: NumberProps) => {
  return (
    <div className={`${styles.NumberContainer} ${styles[className]}`}>
        <div className={styles.Number}>
          {number}
        </div>
        <div className={styles.Text}>
          {text}
        </div>
    </div>
  );
};

export default Number;
