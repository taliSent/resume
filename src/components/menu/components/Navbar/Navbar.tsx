import React, { ReactNode } from "react";
import LINKS from "../../constants";
import styles from "./Navbar.module.css";
import { NavHashLink } from "react-router-hash-link";

type NavbarT = {
  toggleTheme: ReactNode;
  isMenuOpen: boolean;
  closeMenu: () => void;
};

const Navbar: React.FC<NavbarT> = ({ toggleTheme, isMenuOpen, closeMenu }) => {
  const hashLinksClasses = `${styles.HashLinks} ${
    !isMenuOpen && styles.HidingLinks
  }`;
  return (
    <ul className={hashLinksClasses}>
      {LINKS.map(({ name, anchor }) => (
        <li className={styles.li} key={name}>
          <NavHashLink
            onClick={closeMenu}
            to={anchor}
            data-replace={name}
            smooth
            className={styles.HashLink}
          >
            <span>{name}</span>
          </NavHashLink>
        </li>
      ))}
      <li className={styles.li}>{toggleTheme}</li>
    </ul>
  );
};
export default Navbar;
