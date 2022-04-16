import React, { useState } from "react";
import {
  isMobileOnly,
  MobileView
} from "react-device-detect";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { HashLink } from "react-router-hash-link";
import styles from "./Menu.module.css";

const Menu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(!isMobileOnly);
  const handleClick = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const openCloseButton = (
    <div className={styles.OpenClose} onClick={handleClick}>
      {isMenuOpen ? <IoMdClose /> : <RiMenu3Line />}
    </div>
  );
  const navigation = (
    <>
      {isMenuOpen && (
        <div className={styles.HashLinks}>
          <HashLink onClick={closeMenu} to="#stack" smooth className={styles.HashLink}>
            Stack
          </HashLink>
          <HashLink onClick={closeMenu} to="#experience" smooth className={styles.HashLink}>
            Timeline
          </HashLink>
          <HashLink onClick={closeMenu} to="#testimonials" smooth className={styles.HashLink}>
            Testimonials
          </HashLink>
          <HashLink onClick={closeMenu} to="#contact-me" smooth className={styles.HashLink}>
            Contact me
          </HashLink>
        </div>
      )}
      <MobileView>{openCloseButton}</MobileView>
    </>
  );
  return <div className={`${styles.Menu} ${isMenuOpen && styles.MenuOpen}`}>{navigation}</div>;
};
export default Menu;
