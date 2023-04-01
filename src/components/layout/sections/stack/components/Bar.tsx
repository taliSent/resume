import React from "react";
import styles from "./Bar.module.css";

type BarProps = {
  technologyName: string;
  className?: string;
};

const Bar: React.FC<BarProps> = ({ technologyName, className }: BarProps) => {
  return (
    <div data-aos='fade-up'>
      <li>
        <div className={styles.Name}>{technologyName}</div>
        <div className={styles.Bar}>
          <div
            className={`${styles.ProgressLevel} ${className} ${styles.Scrolled}`}
          ></div>
        </div>
      </li>
    </div>
  );
};
export default Bar;
