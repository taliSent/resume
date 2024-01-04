import React from "react";
import { HiDownload } from "react-icons/hi";
import styles from "./Buttons.module.css";

const DOWNLOAD_CV_URL = `${process.env.PUBLIC_URL}/CV_Sentemova.pdf`;

const Buttons: React.FC = () => {
  return (
    <div className={styles.ButtonContainer}>
      <a href={DOWNLOAD_CV_URL} download>
        <button
          className={`${styles.Button} ${styles.ShowDetails}`}
          role="link"
        >
          Download CV <HiDownload />
        </button>
      </a>
    </div>
  );
};
export default React.memo(Buttons);
