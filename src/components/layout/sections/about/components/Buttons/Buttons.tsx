import React, { useEffect, useRef } from "react";
import { HiDownload } from "react-icons/hi";
import styles from "./Buttons.module.css";
import {
  AchievementT,
  AchievementId,
  getAchievementData,
} from "src/feature/Achevements";
import { findById } from "src/utils/array";
import { TALI_RESUME_KEY } from "src/constants/constants";
import { useLocalStorage } from "usehooks-ts";
import { useTooltip } from "src/store/store";

const DOWNLOAD_CV_URL = import.meta.env.BASE_URL + `CV_Sentemova.pdf`;

const Buttons: React.FC = () => {
  const hasClicked = useRef(false);
  const refCursorFolower = useRef<HTMLDivElement>(null);
  const refbutton = useRef<HTMLButtonElement>(null);
  const [_, setAchievements] = useLocalStorage<AchievementT[]>(
    TALI_RESUME_KEY,
    []
  );
  const openTooltip = useTooltip((state) => state.openTooltip);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!refCursorFolower.current || !refbutton.current) return;
      const rect = refbutton.current.getBoundingClientRect();
      if (!e.clientX || !e.clientY) return;
      refCursorFolower.current.style.left = e.clientX - rect.left - 35 + "px";
      refCursorFolower.current.style.top = e.clientY - rect.top - 35 + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const handleButtonClick = () => {
    if (hasClicked.current) return;
    hasClicked.current = true;
    const theyKnowAchivement: AchievementT = {
      id: AchievementId.DONWLOAD_CV,
    };
    setAchievements((prev) => {
      if (findById(prev, AchievementId.DONWLOAD_CV)) return prev;
      const { img, subtitle, title } = getAchievementData(
        AchievementId.DONWLOAD_CV
      );
      openTooltip({ img, title, subtitle });
      return [...prev, theyKnowAchivement];
    });
  };

  return (
    <div className={styles.ButtonContainer}>
      <a href={DOWNLOAD_CV_URL} target="_blank" download rel="noreferrer">
        <button
          className={styles.Button}
          ref={refbutton}
          onClick={handleButtonClick}
        >
          Download CV <HiDownload />
          <div className={styles.FollowTheCursor} ref={refCursorFolower} />
        </button>
      </a>
    </div>
  );
};
export default Buttons;
