import React, { useContext } from "react";
import Layout from "./components/layout/Layout";
import Menu from "./components/menu/Menu";
import styles from "./App.module.css";
import { ThemeContext } from "./context/context";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div data-theme={theme} id="root_">
      <div className={styles.Wave}>
        <Menu />
        <div className={styles.Container}>
          <Layout />
        </div>
        <div>
        </div>
      </div>
    </div>

  );
};

export default App;
