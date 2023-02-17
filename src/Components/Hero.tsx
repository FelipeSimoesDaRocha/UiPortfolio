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
            Olá, eu sou <strong>Felipe!</strong>
          </h2>
          <TypeAnimation
            sequence={[
              "Desenvolvedor Front-end",
              1500,
              "Desenvolvedor UX",
              1500,
            ]}
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
            className={styles.hero_paragrafo}
          />

          <p className={styles.hero_paragrafo}>
            Minha paixão é sonhar com ideias e torná-las realidade com interfaces elegantes.
            Sempre em busca do proximo nivel.
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
