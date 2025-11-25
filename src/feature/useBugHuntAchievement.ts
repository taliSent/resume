import { useEffect } from "react";
import { TALI_RESUME_KEY } from "src/constants/constants";
import {
  AchievementT,
  AchievementBugHunt,
  AchievementId,
  getAchievementData,
} from "src/feature/Achevements";
import { findById } from "src/utils/array";
import { useLocalStorage } from "usehooks-ts";
import { MAX_BUGS_QUANTITY } from "../components/layout/sections/bugHunt/constants";
import { useTooltip } from "src/store/store";

//todo: better acrchitecture
const useBugHuntAchievements = (areBugsCaught: boolean) => {
  const [_, setValue] = useLocalStorage<AchievementT[]>(TALI_RESUME_KEY, []);
  const openTooltip = useTooltip((state) => state.openTooltip);

  useEffect(() => {
    if (!areBugsCaught) return;
    setValue((val) => {
      const oldBugAchievement = findById(
        val,
        AchievementId.BUGS_CAUGHT
      ) as AchievementBugHunt;
      const bugHuntAchievement = !oldBugAchievement
        ? {
            id: AchievementId.BUGS_CAUGHT,
            quantity: MAX_BUGS_QUANTITY,
          }
        : {
            id: AchievementId.BUGS_CAUGHT,
            quantity: oldBugAchievement?.quantity + MAX_BUGS_QUANTITY,
          };
      const result = !oldBugAchievement
        ? [...val, bugHuntAchievement]
        : [
            ...val.filter((item) => item.id !== oldBugAchievement.id),
            bugHuntAchievement,
          ];
      const { img, subtitle, title } = getAchievementData(
        AchievementId.BUGS_CAUGHT,
        bugHuntAchievement.quantity
      );
      openTooltip({
        img,
        subtitle,
        title,
      });
      return result;
    });
  }, [areBugsCaught]);
};

export default useBugHuntAchievements;
