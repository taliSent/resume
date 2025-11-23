import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import { Achievement, AchievementId } from "./Achevements";
import { TALI_RESUME_KEY } from "src/constants/constants";

const useFirstAchievement = () => {
  const [_, setValue] = useLocalStorage<Achievement[]>(TALI_RESUME_KEY, []);

  useEffect(() => {
    const firstAchivement: Achievement = {
      id: AchievementId.FIRST_VISIT,
    };
    setValue((prev) => {
      if (prev.length > 0) return prev;
      return [...prev, firstAchivement];
    });
  }, []);
};
export default useFirstAchievement;
