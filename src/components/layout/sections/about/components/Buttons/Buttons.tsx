import ReactPDF from "@react-pdf/renderer";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import { RiEyeCloseLine } from "react-icons/ri";
import App from "../../../../../../App";
import styles from "./Buttons.module.css";

type ButtonsProps = {
  showDetails: boolean;
  onClick: () => void;
};

const Buttons: React.FC<ButtonsProps> = ({
  showDetails,
  onClick,
}: ButtonsProps) => {
  const showDetailsLabel = (
    <div className={styles.ButtonLabel}>
      Show details <AiOutlineEye className="icon" />
    </div>
  );
  const hideDetailsLabel = (
    <div className={styles.ButtonLabel}>
      HideDetails <RiEyeCloseLine className="icon" />
    </div>
  );

  const downloadPDF = () => {
  };

  return (
    <div className={styles.ButtonContainer}>
      <button className={`${styles.Button} ${styles.Download}`}>
        <div onClick={downloadPDF}>Download CV</div> <HiDownload />
      </button>
      <button
        className={`${styles.Button} ${styles.ShowDetails}`}
        onClick={onClick}
      >
        {showDetails ? hideDetailsLabel : showDetailsLabel}
      </button>
    </div>
  );
};
export default Buttons;
