import React, { ReactNode } from "react";
import { HashLink } from "react-router-hash-link";
import LINKS from "../../constants";
import styles from "./Navbar.module.css";

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
          <HashLink
            onClick={closeMenu}
            to={anchor}
            smooth
            data-replace={name}
            className={styles.HashLink}
          >
            <span>{name}</span>
          </HashLink>
        </li>
      ))}
      <li>{toggleTheme}</li>
    </ul>
  );
};
export default Navbar;
