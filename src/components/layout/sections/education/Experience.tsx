import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import Header from "../../header/Header";
import ProgressEducation from "./components/ProgressEducation";
import ProgressWork from "./components/ProgressWork";
import styles from "./Experience.module.css";
import MediaQuery, { useMediaQuery } from 'react-responsive'

const Experience: React.FC = () => {
  const HeaderEducation = (
    <Header
      name="Education"
      icon={<FaGraduationCap className="icon" size="46" />}
      h2={true}
    />
  );
  const HeaderExperience = (
    <Header
      name="Experience"
      icon={<MdOutlineWork className="icon" size="38" />}
      h2={true}
    />
  );

  return (
    <section id="experience">
      <MediaQuery minWidth={849}>
        <div className={styles.Headers}>
          {HeaderEducation}
          {HeaderExperience}
        </div>
        <div className={styles.XP}>
          <ProgressEducation />
          <ProgressWork />
        </div></MediaQuery>
      <MediaQuery maxWidth={847}>
        {HeaderEducation}
        <ProgressEducation />
        {HeaderExperience}
        <div >
          <ProgressWork className={styles.Experience}  /></div>
      </MediaQuery>
    </section>
  );
};
export default Experience;
