import { FC, useState } from "react";
import {
  Achievement,
  AchievementUserFacingMap,
  getQuantity,
} from "src/feature/Achevements";
import Modal from "../modal/Modal";
import styles from "./UserProgress.module.css";

type UserProgressProps = {
  achievements: Achievement[];
};
const UserProgress: FC<UserProgressProps> = ({
  achievements,
}: UserProgressProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={styles.ProgressContainer}>
      <button onClick={() => setIsModalOpen(true)}>
        {achievements.length}
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className={styles.Plate}>
          <button
            onClick={() => setIsModalOpen(false)}
            className={styles.CloseButton}
          >
            ⨯
          </button>
          {achievements?.map((achievement) => (
            <div>
              {`${AchievementUserFacingMap.get(achievement.id)} ${getQuantity(
                achievement
              )}`}
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default UserProgress;
