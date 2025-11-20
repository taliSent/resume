import React from "react";
import styles from "./ProgressUnit.module.css";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "none" }}
      className={`${styles.Unit} ${isMirrored && styles.isMirrored}`}
    >
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
    </motion.div>
  );
};

export default ProgressUnit;
