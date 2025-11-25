import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import MediaQuery, { useMediaQuery } from "react-responsive";
import styles from "./Menu.module.css";
import Navbar from "./components/Navbar/Navbar";
import UserProgress from "../userProgress/UserProgress";

const Menu: React.FC = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const [isMenuOpen, setIsMenuOpen] = useState(!isTabletOrMobile);
  const handleClick = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
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
    <>
      <nav className={menuClasses}>
        <Navbar closeMenu={closeMenu} isMenuOpen={isMenuOpen} />{" "}
        {openCloseButton}
        <MediaQuery maxWidth={1024}>{openCloseButton}</MediaQuery>
      </nav>
      <MediaQuery maxWidth={1024}>
        <UserProgress />
      </MediaQuery>
    </>
  );
};
export default Menu;
