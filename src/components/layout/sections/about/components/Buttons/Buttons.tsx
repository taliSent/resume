import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import { RiEyeCloseLine } from "react-icons/ri";
import styles from "./Buttons.module.css";

const DOWNLOAD_CV_URL = `${process.env.PUBLIC_URL}/CV_Sentemova.pdf`;

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
      Show details <AiOutlineEye className='icon' />
    </div>
  );
  const hideDetailsLabel = (
    <div className={styles.ButtonLabel}>
      Hide Details <RiEyeCloseLine className='icon' />
    </div>
  );

  return (
    <div className={styles.ButtonContainer}>
      <a
        className={`${styles.Button} ${styles.Download}`}
        href={DOWNLOAD_CV_URL}
        aria-label='Download CV'
        download
      >
        Download CV <HiDownload />
      </a>
      <div
        className={`${styles.Button} ${styles.ShowDetails}`}
        onClick={onClick}
        aria-label='Show/hide Details'
      >
        {showDetails ? hideDetailsLabel : showDetailsLabel}
      </div>
    </div>
  );
};
export default React.memo(Buttons);
