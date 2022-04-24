import Carousel from "nuka-carousel";
import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import Header from "../../header/Header";
import Testimonial from "./components/Testimonials/Testimonial";
import CARDS from "./constants";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <Header
        name="Testimonials"
        icon={<RiDoubleQuotesR className="icon" />}
        textSecondary="what my colleagues say"
      />
      <Carousel
        defaultControlsConfig={{
          nextButtonText: ">",
          nextButtonClassName: styles.Button,
          prevButtonText: "<",
          prevButtonClassName: styles.Button,
        }}
        wrapAround={true}
      >
        {CARDS.map(({ photoSrc, coworkerName, coworkerPosition, text, telegram, linkedIn, instagram }) =>
          <Testimonial
            photoSrc={photoSrc}
            coworkerName={coworkerName}
            coworkerPosition={coworkerPosition}
            text={text}
            telegram={telegram}
            linkedIn={linkedIn}
            instagram={instagram}
            key={coworkerName}
          />
        )}
      </Carousel>
    </section>
  );
};
export default Testimonials;
