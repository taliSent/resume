import React from "react";
import { NavHashLink } from "react-router-hash-link";
import LINKS from "../../constants";
import ToggleThemeButton from "../ToggleThemeButton/ToggleThemeButton";
import styles from "./Navbar.module.css";

type NavbarT = {
  isMenuOpen: boolean;
  closeMenu: () => void;
};

const Navbar: React.FC<NavbarT> = ({ isMenuOpen, closeMenu }) => {
  const hashLinksClasses = `${styles.HashLinks} ${
    !isMenuOpen && styles.HidingLinks
  }`;
  return (
    <ul className={hashLinksClasses}>
      {LINKS.map(({ name, anchor }, index) => (
        <li className={styles.li} key={name}>
          <NavHashLink
            onClick={closeMenu}
            to={anchor}
            data-replace={name}
            smooth
            className={
              index == LINKS.length - 1 ? styles.ContactMe : styles.HashLink
            }
          >
            <span>{name}</span>
          </NavHashLink>
        </li>
      ))}
      <li className={styles.li}>
        <ToggleThemeButton />
      </li>
    </ul>
  );
};
export default Navbar;
