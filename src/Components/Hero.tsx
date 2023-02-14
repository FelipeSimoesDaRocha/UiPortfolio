import Link from "next/link";
import styles from "../styles/Hero.module.css";
import BackgroundAnimation from "./BgAnimation";
import Photo from "./Photo";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <main className={styles.page}>
      <BackgroundAnimation />
      <div className={` ${styles.hero_container} `}>
        <main className="hero_main">
          <h2 className={styles.hero_title}>
            Olá,
            <div className="">
              eu sou o <b className="">Felipe!</b>
            </div>
          </h2>

          <TypeAnimation
            sequence={[
              "Desenvolvedor Front-end", // Types 'One'
              1500, // Waits 1s
              "Desenvolvedor UX", // Types 'Three' without deleting 'Two'
              1500,
            ]}
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
            className={styles.hero_paragrafo}
          />

          <p className={styles.hero_paragrafo}>
            Sou um Dev fullstack com destaque para Front-end, estudante De
            desenvolvimento web, sempre em busca do proximo nivel!
          </p>

          <Link href="/projetos">
            <a className={styles.hero_button}>Meus Projetos!</a>
          </Link>
        </main>
        <Photo />
      </div>
    </main>
  );
};

export default Hero;
