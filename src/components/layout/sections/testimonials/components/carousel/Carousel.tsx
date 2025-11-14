import useEmblaCarousel from "embla-carousel-react";
import React, { ReactElement } from "react";
import CARDS from "../../constants";
import Testimonial from "../Testimonials/Testimonial";
import styles from "./Carousel.module.css";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./CarouselArrowButtons";

type PropType = {
  slides?: number[];
  options?: ReactElement[];
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <article className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {CARDS.map((props, index) => (
            <div className={styles.embla__slide} key={index}>
              <Testimonial {...props} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__controls}>
        <div className={styles.embla__buttons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

      </div>
    </article>
  );
};

export default EmblaCarousel;
