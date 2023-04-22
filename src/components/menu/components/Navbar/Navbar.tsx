import React, { ReactNode } from "react";
import { HashLink } from "react-router-hash-link";
import LINKS from "../../constants";
import styles from "./Navbar.module.css";

type NavbarT = {
  children: ReactNode;
  isMenuOpen: boolean;
  closeMenu: () => void;
};

const Navbar: React.FC<NavbarT> = ({ children, isMenuOpen, closeMenu }) => {
  const hashLinksClasses = `${styles.HashLinks} ${
    !isMenuOpen && styles.HidingLinks
  }`;
  return (
    <ul className={hashLinksClasses}>
      {LINKS.map(({ name, anchor }) => (
        <li>
          <HashLink
            onClick={closeMenu}
            to={anchor}
            smooth
            className={styles.HashLink}
            data-replace={name}
            key={name}
          >
            <span>{name}</span>
          </HashLink>
        </li>
      ))}{" "}
      {children}
    </ul>
  );
};
export default Navbar;
