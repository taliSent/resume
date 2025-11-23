import { useEffect } from "react";
import { TALI_RESUME_KEY } from "src/constants/constants";
import {
  Achievement,
  AchievementBugHunt,
  AchievementId,
} from "src/feature/Achevements";
import { findById } from "src/utils/array";
import { useLocalStorage } from "usehooks-ts";
import { MAX_BUGS_QUANTITY } from "../components/layout/sections/bugHunt/constants";

const useBugHuntAchievements = (areBugsCaught: boolean) => {
  const [_, setValue] = useLocalStorage<Achievement[]>(TALI_RESUME_KEY, []);

  useEffect(() => {
    if (!areBugsCaught) return;
    setValue((val) => {
      console.log("val", val);

      const oldBugAchievement = findById(
        val,
        AchievementId.BUGS_CAUGHT
      ) as AchievementBugHunt;

      return !oldBugAchievement
        ? [
            ...val,
            {
              id: AchievementId.BUGS_CAUGHT,
              quantity: MAX_BUGS_QUANTITY,
            },
          ]
        : [
            ...val.filter((item) => item.id !== oldBugAchievement.id),
            {
              id: AchievementId.BUGS_CAUGHT,
              quantity: oldBugAchievement?.quantity + MAX_BUGS_QUANTITY,
            },
          ];
    });
  }, [areBugsCaught]);
};

export default useBugHuntAchievements;
