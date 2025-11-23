import { FC, useState } from "react";
import {
  Achievement,
  AchievementUserFacingMap,
  getQuantity,
} from "src/feature/Achevements";
import Modal from "../modal/Modal";
import styles from "./UserProgress.module.css";
import Bar from "../bar/Bar";
import { motion } from "framer-motion";
import { useLocalStorage } from "usehooks-ts";
import { TALI_RESUME_KEY } from "src/constants/constants";
import useFirstAchievement from "src/feature/useFirstAchievements";
import Header from "../layout/header/Header";
import { GiAchievement } from "react-icons/gi";

const UserProgress: FC = () => {
  const [value] = useLocalStorage<Achievement[]>(TALI_RESUME_KEY, []);
  useFirstAchievement();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const allAchievementsQuantity = AchievementUserFacingMap.size;
  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={styles.ProgressContainer}
      >
        <Bar progress={value.length / allAchievementsQuantity} />
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className={styles.Plate}>
          <button
            onClick={() => setIsModalOpen(false)}
            className={styles.CloseButton}
          >
            ⨯
          </button>
          <h3 className={styles.PlateHeader}>
            Achievements
            <GiAchievement />
          </h3>

          {value?.map((achievement) => (
            <div>
              {`${AchievementUserFacingMap.get(achievement.id)} ${getQuantity(
                achievement
              )}`}
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default UserProgress;
