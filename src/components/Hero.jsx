import { useEffect, useState } from "react";
import Styles from "../styles/Hero.module.css";
import MyOpenPeep from "../assets/ChoOpenPeeps.png";

const phrases = [
  "I turn ideas into websites.",
  "I design and build for the web.",
  "I create digital experiences.",
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex];

    if (!deleting && text === phrase) {
      const pauseTimer = window.setTimeout(() => setPaused(true), 1400);
      return () => window.clearTimeout(pauseTimer);
    }

    if (paused) {
      const deleteTimer = window.setTimeout(() => {
        setPaused(false);
        setDeleting(true);
      }, 250);
      return () => window.clearTimeout(deleteTimer);
    }

    const typingTimer = window.setTimeout(() => {
      if (deleting) {
        if (text.length <= 1) {
          setText("");
          setDeleting(false);
          setPhraseIndex((current) => (current + 1) % phrases.length);
        } else {
          setText(text.slice(0, -1));
        }
      } else {
        setText(phrase.slice(0, text.length + 1));
      }
    }, deleting ? 35 : 75);

    return () => window.clearTimeout(typingTimer);
  }, [text, deleting, paused, phraseIndex]);

  return (
    <section className={Styles.hero} aria-labelledby="hero-title">
      <div className={Styles.imageContainer}>
        <img
          src={MyOpenPeep}
          alt="Illustration representing Matthew"
          className={Styles.image}
        />
      </div>
      <div className={Styles.content}>
        <p className={Styles.eyebrow}>SELF-TAUGHT DEVELOPER · MANILA, PH</p>
        <h1 id="hero-title">
          Hey, I&apos;m Matthew.
          <br />
          <span className={Styles.typedText} aria-label={phrases[phraseIndex]}>
            <span aria-hidden="true">{text}</span>
            <span className={Styles.cursor} aria-hidden="true" />
          </span>
        </h1>
        <p className={Styles.intro}>
          I enjoy turning ideas into clean, useful, and thoughtful digital
          experiences. Take a look around and see what I&apos;ve been working on.
        </p>
        <div className={Styles.buttons}>
          <a className={Styles.primaryButton} href="#projects">Explore my work</a>
          <a className={Styles.secondaryButton} href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
