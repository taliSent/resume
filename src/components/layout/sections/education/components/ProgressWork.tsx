import React from "react";
import ProgressUnit from "./ProgressUnit/ProgressUnit";

const ProgressWork: React.FC = () => {
  return (
    <div>
      <ProgressUnit
        string1="Researcher"
        string2="MSU"
        string3="2014-2016"
        isMirrored
      />
      <ProgressUnit
        string1="QA Engineer"
        string2="AT Consulting"
        string3="2018-2019"
        isMirrored
      />
      <ProgressUnit
        string1="Junior Software Developer"
        string2="AT Consulting"
        string3="2019"
        isMirrored
      />
      <ProgressUnit
        string1="Frontend developer"
        string2="Cinimex"
        string3="2019-present"
        isLast
        isMirrored
      />
    </div>
  );
};

export default ProgressWork;
