import React from "react";
import { PROGRESS_WORK } from "./constants";
import ProgressUnit from "./ProgressUnit/ProgressUnit";

type ProgressWorkProps = {
  className?: string
}

const ProgressWork: React.FC<ProgressWorkProps> = ({ className }) => {
  return (
    <div className={className}>
      {PROGRESS_WORK.map(({ name, place, years, achievement, isLast, isMirrored, }) =>
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

export default ProgressWork;
