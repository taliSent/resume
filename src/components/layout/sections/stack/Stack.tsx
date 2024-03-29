import React from "react";
import { GiTechnoHeart } from "react-icons/gi";
import Header from "../../header/Header";
import Bar from "./components/Bar";
import styles from "./Stack.module.css";

const Stack: React.FC = () => {
  return (
    <section id='stack' aria-label='my stack'>
      <Header
        name='Stack'
        icon={<GiTechnoHeart className='icon' />}
        textSecondary='technologies I use'
      />
      <ul className={styles.Stack}>
        <Bar technologyName='React' className={styles.React} />
        <Bar technologyName='Typescript' className={styles.Typescript} />
        <Bar technologyName='Vanilla&nbsp;Js' className={styles.Js} />
        <Bar technologyName='CSS' className={styles.CSS} />
        <Bar technologyName='HTML' className={styles.HTML} />
      </ul>
    </section>
  );
};
export default Stack;
