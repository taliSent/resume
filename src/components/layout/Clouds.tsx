import { HTMLMotionProps, motion, MotionValue, useScroll } from "framer-motion";
import { FC, ImgHTMLAttributes, RefObject } from "react";
import { useParallax } from "src/utils/parallax";
import styles from "./Clouds.module.css";

export const Clouds: FC<{
  refAboutSection: RefObject<HTMLDivElement | null>;
}> = ({ refAboutSection }) => {
  const { scrollYProgress } = useScroll({ target: refAboutSection });
  const xFirstCloud = useParallax(scrollYProgress, 0, 400);
  const xSecondCloud = useParallax(scrollYProgress, 0, 400);
  const xThirdCloud = useParallax(scrollYProgress, 0, 300);
  return (
    <>
      <Cloud
        src="img/cloud1.webp"
        x={xFirstCloud}
        className={`${styles.Cloud} ${styles.Cloud1}`}
      />
      <Cloud
        src="img/cloud2.webp"
        x={xSecondCloud}
        className={`${styles.Cloud} ${styles.Cloud2}`}
      />
      <Cloud
        src="img/cloud3.webp"
        x={xThirdCloud}
        className={`${styles.Cloud} ${styles.Cloud3}`}
      />
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
      style={{ x }}
      alt=""
    />
  );
};
