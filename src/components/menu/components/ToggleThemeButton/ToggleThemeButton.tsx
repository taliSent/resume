import { FC, use } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { RiMoonFill } from "react-icons/ri";
import styles from "./ToggleThemeButton.module.css";
import { ThemeContext } from "src/context/context";

const ToggleThemeButton: FC = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <button onClick={toggleTheme} className={styles.ToggleThemeButton}>
      {theme === "dark" ? (
        <BsFillSunFill size="20" />
      ) : (
        <RiMoonFill size="20" />
      )}
    </button>
  );
};

export default ToggleThemeButton;
