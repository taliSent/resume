import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import Carousel from "react-material-ui-carousel";
import Header from "../../header/Header";
import Testimonial from "./components/Testimonials/Testimonial";
import styles from "./Testimonials.module.css";

const cards = [
  {
    photoSrc: "img/Denis.jpg",
    coworkerName: "Denis Dyagilev",
    coworkerPosition:"frontend developer",
    text: <>I am a frontend developer.
      I would like to share my experience of working with Natalia. During my work at Cinimex, I worked with Natasha on the same project. It was comfortable to work, and I was pleased that Natasha helps the rest of the team members.
      The code is written thoughtfully and at the same time readable. I think that Natasha is an excellent developer and I would gladly agree to work together again.
    </>,
    telegram: "@purpleleech",
    linkedIn: "https://www.linkedin.com/in/denis-dyagilev-63b562168",
    instagram: "@purpleleech",
  },
  {
    photoSrc: "img/Denis.jpg",
    coworkerName: "Denis Dyagilev",
    coworkerPosition:"frontend developer",
    text: <>BRBRBR.
      I would like to share my experience of working with Natalia. During my work at Cinimex, I worked with Natasha on the same project. It was comfortable to work, and I was pleased that Natasha helps the rest of the team members.
      The code is written thoughtfully and at the same time readable. I think that Natasha is an excellent developer and I would gladly agree to work together again.
    </>,
    telegram: "@purpleleech",
    linkedIn: "https://www.linkedin.com/in/denis-dyagilev-63b562168",
    instagram: "@purpleleech",
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <Header
        name="Testimonials"
        icon={<RiDoubleQuotesR className="icon" />}
        textSecondary="what my colleagues say"
      />
      <Carousel>
      {cards.map(({photoSrc, coworkerName, coworkerPosition, text, telegram, linkedIn, instagram}) =>
        <Testimonial
          photoSrc={photoSrc}
          coworkerName={coworkerName}
          coworkerPosition={coworkerPosition}
          text={text}
          telegram={telegram}
          linkedIn={linkedIn}
          instagram={instagram}
        /> )}
      </Carousel>
    </section>
  );
};
export default Testimonials;
