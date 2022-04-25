import React, { useContext } from "react";
import Layout from "./components/layout/Layout";
import Menu from "./components/menu/Menu";
import styles from "./App.module.css";
import Links from "./components/links/Links";
import { ThemeContext } from "./context/context";
import { useEffect } from "react";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div data-theme={theme} id="root_">
      <div className={styles.Container}>
        <Menu />
        <Layout />
      </div>
      <Links />
    </div>
  );
};

export default App;
