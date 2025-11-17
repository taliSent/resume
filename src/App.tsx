import { useContext } from "react";
import styles from "./App.module.css";
import Layout from "./components/layout/Layout";
import Menu from "./components/menu/Menu";
import { ThemeContext } from "./context/context";
import MediaQuery from "react-responsive";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div data-theme={theme} id="root_">
      <div className={styles.Wave}>
        <MediaQuery minWidth={847}>
          <img src="img/cloud.png" className={styles.Cloud1} aria-hidden={true} alt="cloud image" />
          <img src="img/cloud.png" className={styles.Cloud2} aria-hidden={true} alt="cloud image" />
        </MediaQuery>
        <Menu />
        <Layout />
      </div>
    </div>
  );
};

export default App;
