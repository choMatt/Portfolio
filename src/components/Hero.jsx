import Styles from "../styles/Hero.module.css";
import MyOpenPeep from "../assets/ChoOpenPeeps.png";

export default function Hero() {
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
          Hey, I&apos;m Matthew. I build <span>for the web.</span>
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
