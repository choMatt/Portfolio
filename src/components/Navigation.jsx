import React from "react";
import { useState } from "react";
import Styles from "../styles/Navigation.module.css";
import CrossSvg from "../assets/cross-svgrepo-com.svg";
import BurgerSvg from "../assets/burger-menu-svgrepo-com.svg";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className={Styles.nav}>
      <div
        onClick={toggleMenu}
        className={`${Styles.backDrop} ${
          isMenuOpen ? Styles.backDropOpened : Styles.backDropClosed
        }`}
      ></div>

      <h1 className={Styles.logo}>CHO.</h1>

      <label htmlFor="burger" className={Styles.burger}>
        <img className={Styles.burgerSvg} src={BurgerSvg} alt="" />
      </label>

      <input
        onClick={toggleMenu}
        id="burger"
        className={Styles.toggle}
        type="checkbox"
      />
      
      <ul
        className={`${Styles.list} ${
          isMenuOpen ? Styles.listOpened : Styles.listClosed
        }`}
      >
        <label htmlFor="burger" className={`${Styles.burger} ${Styles.crossIcon}`}>
          <img className={Styles.crossSvg} src={CrossSvg} alt="" />
        </label>
        <li className={Styles.item}>About</li>
        <li className={Styles.item}>Tech Stack</li>
        <li className={Styles.item}>Projects</li>
        <li className={Styles.item}>Contact</li>
      </ul>
    </div>
  );
}
