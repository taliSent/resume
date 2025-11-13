import React from "react";
import styles from "./Number.module.css";
// import Digit from "./Digit";
// <Digit finalValue={number} duration={0.2} withPlus={withPlus} />

type NumberProps = {
  number: number;
  text: string;
  withPlus?: boolean,
  className: string;
};

const Number: React.FC<NumberProps> = ({
  number, text, className, withPlus = false
}: NumberProps) => {
  return (
    <div className={`${styles.NumberContainer} ${styles[className]}`}>
        <div className={styles.Number}>
          {`${number}${withPlus ? "+" : ""}`}
        </div>
        <div className={styles.Text}>
          {text}
        </div>
    </div>
  );
};

export default Number;
