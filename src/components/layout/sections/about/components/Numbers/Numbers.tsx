import React from "react";
import Number from "./components/Number/Number";
import styles from "./Numbers.module.css";

const Numbers: React.FC = () => {
  return (
    <div className={styles.Numbers}>
        <Number number="3+" text="years of experience" className={"One"} />
        <Number number="6+" text="projects" className={"Two"} />
        <Number number="2" text="specialties"  className={"Three"} />
    </div>
  );
};
export default Numbers;
