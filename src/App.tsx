import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import styles from "./App.module.css";
import Layout from "./components/layout/Layout";
import Menu from "./components/menu/Menu";
import { ThemeContext } from "./context/context";

const initAnimations = () =>
  AOS.init({ easing: "ease-in-out", duration: 700, once: true });

const App = () => {
  useEffect(() => {
    initAnimations();
  }, []);

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
