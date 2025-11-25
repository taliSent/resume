import {
  motion,
  useAnimate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import React, { useEffect } from "react";
import styles from "./Bar.module.css";

type BarProps = {
  progress: number;
  needAnimate?: boolean;
};

const Bar: React.FC<BarProps> = ({ progress }: BarProps) => {
  const lengthNumber = useMotionValue(progress);
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
    <motion.div className={styles.Bar}>
      <motion.div
        className={`${styles.ProgressLevel}`}
        style={{ width }}
      ></motion.div>
    </motion.div>
  );
};

export default Bar;
