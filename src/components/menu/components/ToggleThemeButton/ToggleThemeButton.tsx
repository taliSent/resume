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
    <div className={styles.ToggleThemeButton} aria-label='toggle theme'>
      {theme === "dark" ? (
        <BsFillSunFill size='20' onClick={toggleTheme} />
      ) : (
        <RiMoonFill size='20' onClick={toggleTheme} />
      )}
    </div>
  );
};
export default ToggleThemeButton;
