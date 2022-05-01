import React from "react";
import { PROGRESS_EDUCATION } from "./constants";
import ProgressUnit from "./ProgressUnit/ProgressUnit";

const ProgressEducation: React.FC = () => {
  return (
    <div data-aos="fade-up">
      {PROGRESS_EDUCATION.map(({ name, place, years, achievement, isLast, isMirrored, }) =>
        <ProgressUnit
          name={name}
          place={place}
          achievement={achievement}
          years={years}
          isLast={isLast}
          isMirrored={isMirrored}
          key={name}
        />
      )}
    </div>
  );
};

export default ProgressEducation;
