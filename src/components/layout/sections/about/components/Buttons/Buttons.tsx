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
              "linear-gradient(40deg, #D55B22)",
            // backgroundSize: "180% 180%",
          }}
          // animate={{
          //   backgroundPosition: ["0% 0%", "100% 100%"],
          // }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          whileHover={{
            scale: [1, 1.05]
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
