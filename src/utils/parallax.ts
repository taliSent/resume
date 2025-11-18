import { MotionValue, useTransform } from "motion/react";

export const useParallax = (
  value: MotionValue<number>,
  initial: number,
  distance: number
) => {
  return useTransform(value, [0, 1], [initial, distance]);
};
