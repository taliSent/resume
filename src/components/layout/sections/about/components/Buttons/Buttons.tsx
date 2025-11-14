import { motion } from "motion/react";
import React from "react";
import { HiDownload } from "react-icons/hi";
import styles from "./Buttons.module.css";

const DOWNLOAD_CV_URL = `https://drive.google.com/file/d/1Fr7spdFnohyxuAoMEubrhpCjyb_jhFwT/view?usp=sharing`;

const Buttons: React.FC = () => {
  return (
    <div className={styles.ButtonContainer}>
      {/* <button
          className={styles.Button}
        >
          Contact me
        </button> */}
      <a href={DOWNLOAD_CV_URL} target="_blank" download rel="noreferrer">
        <motion.button
          style={{
            background:
              "linear-gradient(40deg, #F28080, #8f5fdf, #f2055c)",
            backgroundSize: "200% 200%",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={styles.Button}
        >
          Open CV <HiDownload />
        </motion.button>
      </a>
    </div>
  );
};
export default Buttons;
