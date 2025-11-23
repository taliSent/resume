import React from "react";
import styles from "./Bar.module.css";
import { motion } from "motion/react";

type BarProps = {
  progress: number;
};

const Bar: React.FC<BarProps> = ({ progress }: BarProps) => {
  return (
    <div className={styles.Bar}>
      <div
        className={`${styles.ProgressLevel}`}
        style={{ width: `${progress * 100}%` }}
      ></div>
    </div>
  );
};
export default Bar;
