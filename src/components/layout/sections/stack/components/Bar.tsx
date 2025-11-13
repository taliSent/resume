import React from "react";
import styles from "./Bar.module.css";
import { motion } from "motion/react";

type BarProps = {
  technologyName: string;
  className?: string;
};

const Bar: React.FC<BarProps> = ({ technologyName, className }: BarProps) => {
  return (
    <motion.li initial={{ opacity: 0, x: (Math.random() < 0.5 ? 1 : -1)*50 }} whileInView={{ opacity: 1, x: 0 }} >
      <div className={styles.Name}>{technologyName}</div>
      <div className={styles.Bar}>
        <div
          className={`${styles.ProgressLevel} ${className} ${styles.Scrolled}`}
        ></div>
      </div>
    </motion.li>
  );
};
export default Bar;
