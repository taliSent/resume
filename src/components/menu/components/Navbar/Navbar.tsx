import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { CONTACT_ME_NAME, LINKS } from "../../constants";
import ToggleThemeButton from "../ToggleThemeButton/ToggleThemeButton";
import styles from "./Navbar.module.css";
import UserProgress from "src/components/userProgress/UserProgress";

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
      {LINKS.map(({ name, anchor }) => (
        <li className={styles.li} key={name}>
          <NavHashLink
            onClick={closeMenu}
            to={anchor}
            data-replace={name}
            smooth
            className={
              name === CONTACT_ME_NAME ? styles.ContactMe : styles.HashLink
            }
          >
            <span>{name}</span>
          </NavHashLink>
        </li>
      ))}
      <div className={styles.li}>
        <ToggleThemeButton />
      </div>
      <div className={`${styles.UserProgress}`}>
        <UserProgress />
      </div>
    </ul>
  );
};
export default Navbar;
