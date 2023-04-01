import React from "react";
import styles from "./Bar.module.css";

type BarProps = {
  technologyName: string;
  className?: string;
};

const Bar: React.FC<BarProps> = ({ technologyName, className }: BarProps) => {
  return (
    <li data-aos='fade-up'>
      <div className={styles.Name}>{technologyName}</div>
      <div className={styles.Bar}>
        <div
          className={`${styles.ProgressLevel} ${className} ${styles.Scrolled}`}
        ></div>
      </div>
    </li>
  );
};
export default Bar;
