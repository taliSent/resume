import React from "react";
import styles from "./ProgressUnit.module.css";

export type ProgressUnitProps = {
  name: string;
  place?: string;
  years?: string;
  achievement?: string;
  isLast?: boolean;
  isMirrored?: boolean;
};

const ProgressUnit: React.FC<ProgressUnitProps> = ({
  name,
  place,
  years,
  achievement,
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
        <strong className={styles.Name}>{name}</strong>
        <div className={styles.Years}>{years}</div>
        <div className={styles.Years}>{place}</div>
        <div className={styles.Achievement}>{achievement}</div>
      </div>
    </div>
  );
};

export default ProgressUnit;
