import Carousel from "nuka-carousel";
import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import Header from "../../header/Header";
import Testimonial from "./components/Testimonials/Testimonial";
import CARDS from "./constants";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <Header
        name='Testimonials'
        icon={<RiDoubleQuotesR className='icon' />}
        textSecondary='what my colleagues say'
      />
      <div data-aos='fade-up'>
        <Carousel
          defaultControlsConfig={{
            nextButtonText: ">",
            nextButtonClassName: styles.Button,
            prevButtonText: "<",
            prevButtonClassName: styles.Button,
          }}
          wrapAround={true}
        >
          {CARDS.map(
            ({
              photoSrc,
              coworkerName,
              coworkerPosition,
              text,
              telegram,
              linkedIn,
              habr,
              instagram,
            }) => (
              <Testimonial
                photoSrc={photoSrc}
                coworkerName={coworkerName}
                coworkerPosition={coworkerPosition}
                text={text}
                telegram={telegram}
                linkedIn={linkedIn}
                habr={habr}
                instagram={instagram}
                key={coworkerName}
              />
            )
          )}
        </Carousel>
      </div>
    </section>
  );
};
export default Testimonials;
