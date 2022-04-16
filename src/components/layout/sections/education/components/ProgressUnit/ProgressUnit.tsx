import React from "react";
import styles from "./ProgressUnit.module.css";

type ProgressUnitProps = {
  string1: string;
  string2?: string;
  string3?: string;
  isLast?: boolean;
  isMirrored?: boolean;
};

const ProgressUnit: React.FC<ProgressUnitProps> = ({
  string1,
  string2,
  string3,
  isLast,
  isMirrored,
}: ProgressUnitProps) => {
  return (
    <div className={`${styles.Unit} ${isMirrored && styles.isMirrored}`}>
      <div className={styles.Time}>
        <div className={styles.TimePoint} />
        {!isLast && <div className={styles.TimeLine} />}
      </div>
      <div className={`${styles.Text} ${isMirrored && styles.isMirroredText}`}>
        <strong className={styles.Name}>{string1}</strong>
        <div>{string2}</div>
        <div className={styles.Years}>{string3}</div>
      </div>
    </div>
  );
};

export default ProgressUnit;
