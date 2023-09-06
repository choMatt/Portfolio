import React from "react";
import { useState } from "react";
import styles from "../styles/Navigation.module.css";
import CrossSvg from "../assets/cross-svgrepo-com.svg";
import BurgerSvg from "../assets/burger-menu-svgrepo-com.svg";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className={styles.nav}>
      <div
        onClick={toggleMenu}
        className={`${styles.backDrop} ${
          isMenuOpen ? styles.backDropOpened : styles.backDropClosed
        }`}
      ></div>

      <h1 className={styles.logo}>CHO.</h1>

      <label htmlFor="burger" className={styles.burger}>
        <img className={styles.burgerSvg} src={BurgerSvg} alt="" />
      </label>

      <input
        onClick={toggleMenu}
        id="burger"
        className={styles.toggle}
        type="checkbox"
      />
      
      <ul
        className={`${styles.list} ${
          isMenuOpen ? styles.listOpened : styles.listClosed
        }`}
      >
        <label htmlFor="burger" className={`${styles.burger} ${styles.crossIcon}`}>
          <img className={styles.crossSvg} src={CrossSvg} alt="" />
        </label>
        <li className={styles.item}>About</li>
        <li className={styles.item}>Tech Stack</li>
        <li className={styles.item}>Projects</li>
        <li className={styles.item}>Contact</li>
      </ul>
    </div>
  );
}
