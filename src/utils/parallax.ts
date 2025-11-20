import { MotionValue, useTransform } from "framer-motion";

export const useParallax = (
  value: MotionValue<number>,
  initial: number | string,
  distance: number | string
) => {
  return useTransform(value, [0, 1], [initial, distance]);
};
