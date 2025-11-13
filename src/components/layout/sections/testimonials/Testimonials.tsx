import { RiDoubleQuotesR } from "react-icons/ri";
import Header from "../../header/Header";
import Carousel from "./components/carousel/Carousel";
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <section id='testimonials' aria-label='testimonials'>
      <Header
        name='Testimonials'
        icon={<RiDoubleQuotesR className='icon' />}
        textSecondary='what my colleagues say'
      />

      <Carousel />
    </section>
  );
};
export default Testimonials;
