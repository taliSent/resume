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
  const { scrollYProgress } = useScroll();
  // todo: change target, separate the cloud components
  const xFirstCloud = useParallax(scrollYProgress, 0, 1800);
  const xSecondCloud = useParallax(scrollYProgress, 0, 1800);
  return (
    <div data-theme={theme} id="root_">
      <div className={styles.Wave}>
        <MediaQuery minWidth={847}>
          <motion.img
            src="img/cloud.png"
            className={styles.Cloud1}
            aria-hidden={true}
            style={{ x: xFirstCloud }}
            alt=""
          />
          <motion.img
            src="img/cloud.png"
            className={styles.Cloud2}
            style={{ x: xSecondCloud }}
            aria-hidden={true}
            alt=""
          />
        </MediaQuery>
        <Menu />
        <Layout />
      </div>
    </div>
  );
};

export default App;
