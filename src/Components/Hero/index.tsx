// Next
import Image from "next/image";

// Styles
import styles from "./styles.module.css";

// Animation
import { TypeAnimation } from "react-type-animation";

// Models
import { SocialButton } from "../../models";

// Translations
import { useTranslation } from "react-i18next";

import BackgroundAnimation from "../svg/BgAnimation";
import Img from "../../../public/assets/photo.png"
import Banner from "../../../public/assets/banner.png"

import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Hero() {
  const { t } = useTranslation();

  const SocialButtons = [
    {
      name: "Linkedin",
      color: "#0077b5",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/felipe-sim%C3%B5es-da-rocha",
      className: styles.linkedin
    },
    {
      name: "Github",
      color: " #333",
      icon: <FaGithub />,
      link: "https://github.com/FelipeSimoesDaRocha",
      className: styles.github
    },
  ] as unknown as SocialButton[];

  return (
    <section id="home" className={styles.hero_ui_intro} >
      <BackgroundAnimation />
      <div className={styles.page_padding}>
        <div className={styles.container}>
          <div className={styles.ui_intro_inner}>
            <div className={styles.intro_wrap}>
              <div className={styles.intro_content}>
                <div className={styles.heading_ui_wrap}>
                  <h2 className={styles.hero_title}>
                    {t("hero.label")} <strong>Felipe!</strong>
                  </h2>
                  <TypeAnimation
                    sequence={["Developer - Front-end", 1500, "Developer - UX", 1500,]}
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
                    {/* {t("hero.text")}
                    <blockquote>{t("hero.blockquote")}</blockquote> */}
                  </p>
                </div>
              </div>

              <div className={styles.intro_img_wrap}>
                <div className={styles.intro_img_blur_bg}></div>
                <div className={styles.banner}>
                  <Image
                    src={Banner}
                    alt="Imagem de Felipe Rocha"
                    className={styles.intro_img}
                    width={750}
                    height={624}
                    objectFit="contain"
                  />
                </div>

                <Image
                  src={Img}
                  alt="Imagem de Felipe Rocha"
                  className={styles.intro_img}
                  width={500}
                  height={624}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};