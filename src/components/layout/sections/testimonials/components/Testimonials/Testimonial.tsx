import React, { ReactNode } from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";
import { ImTelegram } from "react-icons/im";
import styles from "./Testimonial.module.css";

type TestimonialProps = {
  photoSrc: string;
  coworkerName: string;
  coworkerPosition: string;
  text: string | ReactNode;
  telegram?: string;
  linkedIn?: string;
  instagram?: string;
};

const Testimonial: React.FC<TestimonialProps> = ({
  photoSrc,
  coworkerName,
  coworkerPosition,
  text,
  telegram,
  linkedIn,
  instagram,
}: TestimonialProps) => {
  return (
    <div className={styles.Testimonial}>
      <img src={`${process.env.PUBLIC_URL}/${photoSrc}`} alt="" className={styles.Photo} loading="lazy" />      
      <div className={styles.CoworkerName}>{coworkerName}</div>
      <div className={styles.CoworkerPosition}>{coworkerPosition}</div>
      <span className={styles.Line} />
      <div className={styles.Review}>{text}</div>
      <div className={styles.IconsSocial}>
        {telegram && <a href={`https://t.me/${telegram}`} target="_blank" rel="noreferrer"><ImTelegram size="22" /></a>}
        {linkedIn && <a href={linkedIn} target="_blank" rel="noreferrer"><TiSocialLinkedinCircular size="30" /></a>}
        {instagram && <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noreferrer"><BsInstagram size="20" /></a>}
      </div>
    </div>
  );
};
export default Testimonial;