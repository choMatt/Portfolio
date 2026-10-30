import Styles from "../styles/Sections.module.css";

const skills = ["HTML", "CSS", "JavaScript", "React", "Vite"];

export default function Sections() {
  return (
    <div className={Styles.sections}>
      <section className={Styles.about} id="about">
        <p className={Styles.kicker}>A LITTLE ABOUT ME</p>
        <h2>Curious by nature. Always learning.</h2>
        <p>
          I&apos;m a self-taught developer based in Manila, Philippines. I like
          understanding how things work, solving problems, and building
          experiences that feel simple and intuitive to use.
        </p>
      </section>

      <section className={Styles.stack} id="stack">
        <p className={Styles.kicker}>TOOLS I WORK WITH</p>
        <h2>Tech stack</h2>
        <div className={Styles.skills}>
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </section>

      <section className={Styles.projects} id="projects">
        <p className={Styles.kicker}>SELECTED WORK</p>
        <h2>Projects</h2>
        <p>
          I&apos;m working on adding project write-ups here. Check back soon
          to see what I&apos;ve been building.
        </p>
      </section>

      <section className={Styles.contact} id="contact">
        <p className={Styles.kicker}>HAVE AN IDEA?</p>
        <h2>Let&apos;s make something useful.</h2>
        <p>
          Want to collaborate or talk about a project? Find me on GitHub.
        </p>
        <a href="https://github.com/choMatt" target="_blank" rel="noreferrer">
          Visit my GitHub <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className={Styles.footer}>
        <span>© {new Date().getFullYear()} Matthew Cho</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
