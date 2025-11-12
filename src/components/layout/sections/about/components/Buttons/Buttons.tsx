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
        <button className={styles.Button}>
          Open CV <HiDownload />
        </button>
      </a>
    </div>
  );
};
export default React.memo(Buttons);
