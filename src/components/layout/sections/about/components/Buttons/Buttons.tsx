import React, { useEffect, useRef } from "react";
import { HiDownload } from "react-icons/hi";
import styles from "./Buttons.module.css";

const DOWNLOAD_CV_URL = `https://drive.google.com/file/d/1Fr7spdFnohyxuAoMEubrhpCjyb_jhFwT/view?usp=sharing`;

const Buttons: React.FC = () => {
  const refCursorFolower = useRef<HTMLDivElement>(null);
  const refbutton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!refCursorFolower.current || !refbutton.current) return;
      const rect = refbutton.current.getBoundingClientRect();
      if (!e.clientX || !e.clientY) return;
      refCursorFolower.current.style.left = e.clientX - rect.left - 25 + "px";
      refCursorFolower.current.style.top = e.clientY - rect.top - 25 + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className={styles.ButtonContainer}>
      <a href={DOWNLOAD_CV_URL} target="_blank" download rel="noreferrer">
        <button className={styles.Button} ref={refbutton}>
          Open CV <HiDownload />
          <div className={styles.FollowTheCursor} ref={refCursorFolower} />
        </button>
      </a>
    </div>
  );
};
export default Buttons;
