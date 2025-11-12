import React, { createContext, useState } from "react";
import { Themes } from "../constants/constants";

const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

export const ThemeContext = createContext({
  theme: Themes.light,
  toggleTheme: () => {},
});
const ThemeWrapper = (props: any) => {
  const [theme, setTheme] = useState(defaultDark ? Themes.dark : Themes.light);

  const toggleTheme = () => {
    if (theme === Themes.dark) {
      setTheme(Themes.light);
    } else {
      setTheme(Themes.dark);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeWrapper;
