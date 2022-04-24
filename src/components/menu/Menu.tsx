import React, { useContext, useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Line, RiMoonFill } from "react-icons/ri";
import MediaQuery, { useMediaQuery } from 'react-responsive';
import { HashLink } from "react-router-hash-link";
import { ThemeContext } from "../../context/context";
import LINKS from "./constants";
import styles from "./Menu.module.css";

const Menu: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 857px)' })
  const [isMenuOpen, setIsMenuOpen] = useState(!isTabletOrMobile);
  const handleClick = () => isTabletOrMobile && setIsMenuOpen((prev) => !prev);
  const closeMenu = () => isTabletOrMobile && setIsMenuOpen(false);
  const openCloseButton = (
    <div className={styles.ToggleButton} onClick={handleClick}>
      {isMenuOpen ? <IoMdClose /> : <RiMenu3Line />}
    </div>
  );
  const menuClasses = `${styles.Menu} ${!isMenuOpen && styles.MenuClosing}`;
  const hashLinksClasses = `${styles.HashLinks} ${!isMenuOpen && styles.HidingLinks}`;

  const navigation = (
    <div className={menuClasses}>
      <div className={hashLinksClasses}>
        {LINKS.map(
          ({ name, anchor }) =>
            <HashLink
              onClick={closeMenu}
              to={anchor}
              smooth
              className={`${styles.HashLink}`}
              key={name}>
              {name}
            </HashLink>
        )}
        <div className={styles.ToggleThemeButton}>{theme === 'dark' ?
          <BsFillSunFill size="32" color="white" onClick={toggleTheme} /> :
          <RiMoonFill size="32" onClick={toggleTheme} />}</div>
      </div>
      <MediaQuery maxWidth={857}>{openCloseButton}</MediaQuery>
    </div>
  );
  return <>{navigation}</>;
};
export default Menu;
