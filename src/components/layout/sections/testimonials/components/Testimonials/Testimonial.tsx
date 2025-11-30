import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { BsInstagram } from "react-icons/bs";
import { ImTelegram } from "react-icons/im";
import { SiHabr } from "react-icons/si";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import IconLink from "./IconLink/IconLink";
import styles from "./Testimonial.module.css";

type TestimonialProps = {
  photoSrc: string;
  coworkerName: string;
  coworkerPosition: string;
  text: string | ReactNode;
  telegram?: string;
  linkedIn?: string;
  habr?: string;
  instagram?: string;
};

const Testimonial: React.FC<TestimonialProps> = ({
  photoSrc,
  coworkerName,
  coworkerPosition,
  text,
  telegram,
  linkedIn,
  habr,
  instagram,
}: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, filter: "none" }}
      transition={{ duration: 0.2 }}
      className={styles.Testimonial}
    >
      <img
        src={photoSrc}
        width={72}
        height={72}
        alt="coworker's photo"
        className={styles.Photo}
      />
      <div className={styles.CoworkerName}>{coworkerName}</div>
      <div className={styles.CoworkerPosition}>{coworkerPosition}</div>
      <span className={styles.Line} />
      <article className={styles.Review}>{text}</article>
      <div className={styles.IconsSocial}>
        <IconLink
          href={telegram && `https://t.me/${telegram}`}
          icon={<ImTelegram className={styles.ImTelegram} size="22" />}
        />
        <IconLink
          href={linkedIn}
          icon={
            <TiSocialLinkedinCircular
              className={styles.TiSocialLinkedinCircular}
              size="30"
            />
          }
        />
        <IconLink
          href={`https://instagram.com/${instagram}`}
          icon={<BsInstagram size="20" />}
        />
        <IconLink
          href={habr}
          icon={<SiHabr size="24" className={styles.SiHabr} />}
        />
      </div>
    </motion.div>
  );
};
export default Testimonial;
