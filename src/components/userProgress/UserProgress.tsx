import { FC, useState } from "react";
import { GiAchievement } from "react-icons/gi";
import { TALI_RESUME_KEY } from "src/constants/constants";
import {
  AchievementT,
  AchievementUserFacingMap,
  getQuantity,
} from "src/feature/Achevements";
import useFirstAchievement from "src/feature/useFirstAchievements";
import { useLocalStorage } from "usehooks-ts";
import Bar from "../bar/Bar";
import Modal from "../modal/Modal";
import styles from "./UserProgress.module.css";

const UserProgress: FC = () => {
  const [achievementIds] = useLocalStorage<AchievementT[]>(TALI_RESUME_KEY, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useFirstAchievement();

  const allAchievementsQuantity = AchievementUserFacingMap.size;
  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={styles.ProgressContainer}
      >
        <Bar progress={achievementIds.length / allAchievementsQuantity} />
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        disablePlateClick
      >
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
          <ul className={styles.List}>
            {achievementIds?.map((achievement) => (
              <AchievementLi achievement={achievement} key={achievement.id} />
            ))}
          </ul>
        </div>
      </Modal>
    </>
  );
};

type AchievementProps = {
  achievement: AchievementT;
};

const AchievementLi = ({ achievement }: AchievementProps) => {
  const achievementData = AchievementUserFacingMap.get(achievement.id);
  const img = achievementData?.img;
  const subtitle = achievementData?.subtitle;
  const title = achievementData?.title;
  return (
    <li className={styles.Li}>
      <strong>{img}</strong>
      <div>
        <strong>{title}</strong>
        <div className={styles.Subtitle}>
          {`${subtitle} ${getQuantity(achievement)}`}
        </div>
      </div>
    </li>
  );
};

export default UserProgress;
