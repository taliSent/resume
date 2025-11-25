export const enum AchievementId {
  FIRST_VISIT = "FIRST_VISIT",
  KNOWS_EVERYTHING = "KNOWS_EVERYTHING",
  BUGS_CAUGHT = "BUGS_CAUGHT",
  //   SCROLLED__EVERYTHING = "SCROLLED__EVERYTHING",
  // USER_FACT_SENT = "USER_FACT_SENT",
}

type AchievementDataT = {
  title: string;
  subtitle: string;
  img: string;
};

export const AchievementUserFacingMap = new Map<
  AchievementId,
  AchievementDataT
>([
  [
    AchievementId.FIRST_VISIT,
    {
      img: "🌟",
      title: "First look",
      subtitle: "Visited my page for the first time",
    },
  ],
  [
    AchievementId.BUGS_CAUGHT,
    { img: "🪲", title: "Bug Hunt", subtitle: "Bugs caught" },
  ],
  [
    AchievementId.KNOWS_EVERYTHING,
    { img: "㊙️", title: "They know", subtitle: "All secrets revealed" },
  ],
  // [AchievementId.USER_FACT_SENT, "Sent me a fact"],"All secrets revealed"
]);

export type AchievementBugHunt = {
  id: AchievementId.BUGS_CAUGHT;
  quantity: number;
};

export type AchievementT =
  | AchievementBugHunt
  | {
      id: AchievementId.FIRST_VISIT | AchievementId.KNOWS_EVERYTHING;
    };

export const getQuantity = (achievement: AchievementT): string => {
  return "quantity" in achievement ? `: ${achievement.quantity}` : "";
};

export const getAchievementData = (
  achievementId: AchievementId,
  quantity?: number
): AchievementDataT => {
  const achievementData = AchievementUserFacingMap.get(achievementId);
  const img = achievementData?.img ?? "";
  const subtitle = quantity
    ? `${achievementData?.subtitle + ": " + quantity}`
    : achievementData?.subtitle ?? "";

  const title = achievementData?.title ?? "";
  return { img, subtitle, title };
};
