import React, { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import MediaQuery, { useMediaQuery } from "react-responsive";
import { ThemeContext } from "../../context/context";
import styles from "./Menu.module.css";
import Navbar from "./components/Navbar/Navbar";
import ToggleThemeButton from "./components/ToggleThemeButton/ToggleThemeButton";

const Menu: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 857px)" });
  const [isMenuOpen, setIsMenuOpen] = useState(!isTabletOrMobile);
  const handleClick = () => isTabletOrMobile && setIsMenuOpen((prev) => !prev);
  const closeMenu = () => isTabletOrMobile && setIsMenuOpen(false);
  //TODO: separate in another file
  const toggleMenucolor = theme === "dark" ? "#D9D9D9" : "#262526";
  const menuClasses = `${styles.Menu} ${!isMenuOpen && styles.MenuClosing}`;

  const openCloseButton = (
    <button
      className={styles.ToggleButton}
      onClick={handleClick}
      aria-label="open/close menu"
    >
      {isMenuOpen ? (
        <IoMdClose size={23} color={toggleMenucolor} />
      ) : (
        <RiMenu3Line size={23} color={toggleMenucolor} />
      )}
    </button>
  );

  return (
    <nav className={menuClasses}>
      <Navbar
        closeMenu={closeMenu}
        isMenuOpen={isMenuOpen}
        toggleTheme={
          <ToggleThemeButton theme={theme} toggleTheme={toggleTheme} />
        }
      />

      <MediaQuery maxWidth={1024}>{openCloseButton}</MediaQuery>
    </nav>
  );
};
export default Menu;
