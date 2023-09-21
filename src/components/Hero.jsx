import React from "react";
import Styles from "../styles/Hero.module.css";
import MyOpenPeep from "../assets/ChoOpenPeeps.png";

export default function Hero() {
  return (
    <div className={Styles.hero}>
      <div className={Styles.imageContainer}>
        <img
          src={MyOpenPeep}
          alt="Description of the image"
          className={Styles.image}
        />
      </div>
      <div className={Styles.content}>
        <div className={Styles.heading}>
          <h1>Hey there, I'm Matthew, a self-taught developer based in Manila.</h1>
        </div>
        <div className={Styles.buttons}>
          <button>Want to discuss?</button>
          <button>Let's talk</button>
        </div>
      </div>
    </div>
  );
}
