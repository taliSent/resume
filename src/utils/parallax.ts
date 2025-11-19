import { MotionValue, useTransform } from "motion/react";

export const useParallax = (
  value: MotionValue<number>,
  initial: number | string,
  distance: number | string
) => {
  return useTransform(value, [0, 1], [initial, distance]);
};
