import React from "react";
import { HiDownload } from "react-icons/hi";
import styles from "./Buttons.module.css";
import { motion } from "motion/react";

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
          //   initial={{ maskImage: "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)" }}
          // animate={{ maskImage: "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,1) 100%)" }}
          // whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.95 }}
          style={{
            background:
              "linear-gradient(40deg, #0975f1, #8f5fdf, #c73fbc, #e7168e, #f2055c)",
            backgroundSize: "200% 150%",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 0%"],
          }}
          transition={{
            duration: 3,
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
