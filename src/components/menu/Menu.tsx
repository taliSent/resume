import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import MediaQuery, { useMediaQuery } from "react-responsive";
import styles from "./Menu.module.css";
import Navbar from "./components/Navbar/Navbar";

const Menu: React.FC = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 857px)" });
  const [isMenuOpen, setIsMenuOpen] = useState(!isTabletOrMobile);
  const handleClick = () => isTabletOrMobile && setIsMenuOpen((prev) => !prev);
  const closeMenu = () => isTabletOrMobile && setIsMenuOpen(false);
  //TODO: separate in another file
  const menuClasses = `${styles.Menu} ${!isMenuOpen && styles.MenuClosing}`;

  const openCloseButton = (
    <button
      className={styles.ToggleButton}
      onClick={handleClick}
      aria-label="open/close menu"
    >
      {isMenuOpen ? <IoMdClose size={23} /> : <RiMenu3Line size={23} />}
    </button>
  );

  return (
    <nav className={menuClasses}>
      <Navbar closeMenu={closeMenu} isMenuOpen={isMenuOpen} />
      <MediaQuery maxWidth={1024}>{openCloseButton}</MediaQuery>
    </nav>
  );
};
export default Menu;
