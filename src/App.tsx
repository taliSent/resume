import { useContext } from "react";
import styles from "./App.module.css";
import Layout from "./components/layout/Layout";
import Menu from "./components/menu/Menu";
import { ThemeContext } from "./context/context";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div data-theme={theme} id="root_">
      <div className={styles.Wave}>
        <Menu />
        <Layout />
      </div>
    </div>
  );
};

export default App;
