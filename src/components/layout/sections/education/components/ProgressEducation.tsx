import React from "react";
import ProgressUnit from "./ProgressUnit/ProgressUnit";

const ProgressEducation: React.FC = () => {
  return (
    <div>
      <ProgressUnit
        string1="Bachelor of Physics"
        string2="MSU"
        string3="2012-2016"
      />
      <ProgressUnit
        string1="Learn React Course"
        string2="Codecademy"
        string3="2021"
      />
      <ProgressUnit
        string1="Learn React Part II Course"
        string2="Codecademy"
        string3="2021"
      />
      <ProgressUnit
        string1="React Maraphon"
        string2="Zar Zacharov"
        string3="2021"
        isLast
      />
    </div>
  );
};

export default ProgressEducation;
