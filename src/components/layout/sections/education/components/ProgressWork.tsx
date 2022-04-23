import React from "react";
import { PROGRESS_WORK } from "./constants";
import ProgressUnit from "./ProgressUnit/ProgressUnit";

type ProgressWorkProps = {
  className?: string
}

const ProgressWork: React.FC<ProgressWorkProps> = ({ className }) => {
  return (
    <div className={className}>
      {PROGRESS_WORK.map(({ string1, string2, string3, isLast, isMirrored, }) =>
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

export default ProgressWork;
