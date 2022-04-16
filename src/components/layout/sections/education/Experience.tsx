import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import Header from "../../header/Header";
import ProgressEducation from "./components/ProgressEducation";
import ProgressWork from "./components/ProgressWork";
import styles from "./Experience.module.css";

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
      <BrowserView>
        <div className={styles.Headers}>
          {HeaderEducation}
          {HeaderExperience}
        </div>
        <div className={styles.XP}>
          <ProgressEducation />
          <ProgressWork />
        </div>
      </BrowserView>
      <MobileView>
        {HeaderEducation}
        <ProgressEducation />
        {HeaderExperience}
        <ProgressWork />
      </MobileView>
    </section>
  );
};
export default Experience;
