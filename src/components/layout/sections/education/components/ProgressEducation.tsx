import React from "react";
import { PROGRESS_EDUCATION } from "./constants";
import ProgressUnit from "./ProgressUnit/ProgressUnit";

const ProgressEducation: React.FC = () => {
  return (
    <div>
      {PROGRESS_EDUCATION.map(({ string1, string2, string3, isLast, isMirrored, }) =>
        <ProgressUnit
          string1={string1}
          string2={string2}
          string3={string3}
          isLast={isLast}
          isMirrored={isMirrored}
          key={string1}
        />
      )}
    </div>
  );
};

export default ProgressEducation;
