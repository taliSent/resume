import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import MediaQuery from "react-responsive";
import Header from "../../header/Header";
import ProgressEducation from "./components/ProgressEducation";
import ProgressWork from "./components/ProgressWork";
import styles from "./Experience.module.css";

const HeaderEducation = () => (
  <Header
    name='Education'
    icon={<FaGraduationCap className='icon' size='36' />}
    h2={true}
  />
);
const HeaderExperience = () => (
  <Header
    name='Experience'
    icon={<MdOutlineWork className='icon' size='28' />}
    h2={true}
  />
);

const Experience: React.FC = () => {
  return (
    <section id='experience'>
      <MediaQuery minWidth={849}>
        <div className={styles.Headers}>
          <HeaderEducation />
          <HeaderExperience />
        </div>
        <div className={styles.XP}>
          <ProgressEducation />
          <ProgressWork />
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={847}>
        <HeaderExperience />
        <ProgressWork className={styles.Experience} />
        <HeaderEducation />
        <ProgressEducation />
      </MediaQuery>
    </section>
  );
};
export default Experience;
