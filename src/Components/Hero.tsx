import Link from "next/link";
import styles from "../styles/Hero.module.css";
import BackgroundAnimation from "./BgAnimation";
import Photo from "./Photo";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <main className={styles.hero_ui_intro}>
      <BackgroundAnimation />
      <div className={styles.page_padding}>
        <div className={styles.container}>
          <div className={styles.hero_ui_intro_inner}>
            <div className={styles.hero_intro_wrap}>
              <div className={styles.hero_intro_content}>
                <div className={styles.hero_heading_ui_wrap}
                  style={{
                    willChange: "transform, opacity",
                    transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 1
                  }}
                >
                  <h2 className={styles.hero_title}>
                    Olá, eu sou <strong>Felipe!</strong>
                  </h2>
                  <TypeAnimation
                    sequence={["Desenvolvedor Front-end", 1500, "Desenvolvedor UX", 1500,]}
                    wrapper="h2"
                    cursor={true}
                    repeat={Infinity}
                    className={styles.hero_sub_title}
                  />
                </div>
                <div className={`${styles.section_paragraph}` || `${styles.section_paragraph_intro}`}>
                  <p className={styles.text_color_sec}>
                    Minha paixão é sonhar com ideias e torná-las realidade com interfaces elegantes.
                    <strong> Sempre em busca do proximo nivel.</strong>
                  </p>
                </div>
                {/* <Link href="/projetos">
                  <a className={styles.hero_button}>Meus Projetos!</a>
                </Link> */}
              </div>
              <div className={styles.intro_img_wrap}>
                <Photo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
