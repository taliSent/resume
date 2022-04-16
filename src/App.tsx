import React from "react";
import Layout from "./components/layout/Layout";
import Menu from "./components/menu/Menu";
import styles from "./App.module.css";
import Links from "./components/links/Links";

const App = () => {
  return (
    <>
      <div className={styles.Container}>
        <Menu />
        <Layout />
      </div>
      <Links />
    </>
  );
};

export default App;
