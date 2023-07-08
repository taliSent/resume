import { FC } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { RiMoonFill } from "react-icons/ri";
import { Themes } from "../../../../constants/constants";
import styles from "./ToggleThemeButton.module.css";

type ToggleThemeButtonT = {
  theme: Themes.light | Themes.dark;
  toggleTheme: () => void;
};

const ToggleThemeButton: FC<ToggleThemeButtonT> = ({
  theme,
  toggleTheme,
}: ToggleThemeButtonT) => {
  return (
    <div className={styles.ToggleThemeButton}>
      <button onClick={toggleTheme}>
        {theme === "dark" ? (
          <BsFillSunFill size='20' color='#D9D9D9' />
        ) : (
          <RiMoonFill size='20' />
        )}
      </button>
    </div>
  );
};

export default ToggleThemeButton;
