import { useContext, useRef } from "react";
import styles from "./App.module.css";
import Layout from "./components/layout/Layout";
import Menu from "./components/menu/Menu";
import { ThemeContext } from "./context/context";
import MediaQuery from "react-responsive";
import { useParallax } from "@utils/parallax";
import { motion, useScroll } from "motion/react";

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
