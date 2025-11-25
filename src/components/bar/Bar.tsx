import {
  motion,
  useAnimate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import React, { useEffect } from "react";
import styles from "./Bar.module.css";
import useFirstAchievement from "src/feature/useFirstAchievements";

type BarProps = {
  progress: number;
};

const Bar: React.FC<BarProps> = ({ progress }: BarProps) => {
  const lengthNumber = useMotionValue(0);
  const width = useTransform(lengthNumber, (value) => `${value * 100}%`);
  const [_, animate] = useAnimate();

  useEffect(() => {
    const controls = animate(lengthNumber, progress, {
      duration: 1.3,
      ease: "easeInOut",
    });
    return () => controls.stop();
  }, [progress]);

  return (
    <motion.div
      initial={{ boxShadow: "0 0 0.5rem purple" }}
      animate={{ boxShadow: "0 0 0 purple" }}
      transition={{ duration: 1.3, ease: "easeInOut" }}
      className={styles.Bar}
    >
      <motion.div
        className={`${styles.ProgressLevel}`}
        style={{ width }}
      ></motion.div>
    </motion.div>
  );
};

export default Bar;
