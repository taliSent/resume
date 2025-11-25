import { useEffect } from "react";
import { TALI_RESUME_KEY } from "src/constants/constants";
import { useTooltip } from "src/store/store";
import { useLocalStorage } from "usehooks-ts";
import { AchievementId, AchievementT, getAchievementData } from "./Achevements";

const useFirstAchievement = () => {
  const [achivementIds, setAchievementIds] = useLocalStorage<AchievementT[]>(
    TALI_RESUME_KEY,
    []
  );

  const openTooltip = useTooltip((state) => state.openTooltip);
  const handleClick = () => {
    if (achivementIds.length > 0) return;
    const firstAchivement: AchievementT = {
      id: AchievementId.FIRST_VISIT,
    };
    setAchievementIds((prev) => {
      if (prev.length > 0) return prev;
      return [...prev, firstAchivement];
    });
    const { img, subtitle, title } = getAchievementData(
      AchievementId.FIRST_VISIT
    );
    openTooltip({
      img,
      subtitle,
      title,
    });
  };

  useEffect(() => {
    document.addEventListener("click", handleClick, {
      once: true,
      capture: true,
    });

    return () => document.removeEventListener("click", handleClick);
  }, []);
};
export default useFirstAchievement;
