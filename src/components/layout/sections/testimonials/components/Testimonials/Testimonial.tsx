import React, { ReactNode } from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";
import { SiHabr } from "react-icons/si";
import { ImTelegram } from "react-icons/im";
import styles from "./Testimonial.module.css";
import IconLink from "./IconLink/IconLink";

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
    <div className={styles.Testimonial}>
      <img
        src={`${process.env.PUBLIC_URL}/${photoSrc}`}
        alt=""
        className={styles.Photo}
        loading="lazy"
      />
      <div className={styles.CoworkerName}>{coworkerName}</div>
      <div className={styles.CoworkerPosition}>{coworkerPosition}</div>
      <span className={styles.Line} />
      <div className={styles.Review}>{text}</div>
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
    </div>
  );
};
export default Testimonial;
