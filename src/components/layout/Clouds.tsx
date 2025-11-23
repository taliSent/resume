import { FC, RefObject, ImgHTMLAttributes } from "react";
import { useParallax } from "src/utils/parallax";
import { HTMLMotionProps, motion, MotionValue, useScroll } from "framer-motion";
import styles from "./Clouds.module.css";

export const Clouds: FC<{
  refAboutSection: RefObject<HTMLDivElement | null>;
}> = ({ refAboutSection }) => {
  const { scrollYProgress } = useScroll({ target: refAboutSection });
  // todo: separate the cloud components
  const xFirstCloud = useParallax(scrollYProgress, 0, 400);
  const xSecondCloud = useParallax(scrollYProgress, 0, 200);
  return (
    <>
      <Cloud src="img/cloud1.webp" x={xFirstCloud} className={styles.Cloud1} />
      <Cloud src="img/cloud.webp" x={xSecondCloud} className={styles.Cloud2} />
    </>
  );
};

type CloudProps = {
  src: string;
  x: MotionValue<string | number>;
} & ImgHTMLAttributes<HTMLImageElement> &
  HTMLMotionProps<"img">;

const Cloud: FC<CloudProps> = ({ x, src, ...props }) => {
  return (
    <motion.img
      src={src}
      className={props.className}
      aria-hidden={true}
      style={{ x, scale: 1.5 }}
      alt=""
    />
  );
};
