export const enum AchievementId {
  FIRST_VISIT = "FIRST_VISIT",
  KNOWS_EVERYTHING = "KNOWS_EVERYTHING",
  BUGS_CAUGHT = "BUGS_CAUGHT",
  //   SCROLLED__EVERYTHING = "SCROLLED__EVERYTHING",
  // USER_FACT_SENT = "USER_FACT_SENT",
}

export const AchievementUserFacingMap = new Map<AchievementId, string>([
  [AchievementId.FIRST_VISIT, "First visit"],
  [AchievementId.BUGS_CAUGHT, "Bugs caught"],
  [AchievementId.KNOWS_EVERYTHING, "You found out all my secrets"],
  // [AchievementId.USER_FACT_SENT, "Sent me a fact"],
]);
export type AchievementBugHunt = {
  id: AchievementId.BUGS_CAUGHT;
  quantity: number;
};
export type Achievement =
  | AchievementBugHunt
  | {
      id: AchievementId.FIRST_VISIT | AchievementId.KNOWS_EVERYTHING;
    };

export const getQuantity = (achievement: Achievement): string => {
  return "quantity" in achievement ? `: ${achievement.quantity}` : "";
};
