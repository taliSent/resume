import Carousel from "nuka-carousel";
import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import Header from "../../header/Header";
import Testimonial from "./components/Testimonials/Testimonial";
import CARDS from "./constants";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section id='testimonials' aria-label='testimonials'>
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
          {CARDS.map((props, index) => (
            <Testimonial key={index} {...props} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};
export default Testimonials;
