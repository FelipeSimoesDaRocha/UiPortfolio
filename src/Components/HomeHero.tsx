import { useTranslation } from "react-i18next";
import Image from "next/image";

// Styles
import styles from "../styles/HomeHero.module.css";

// Antd
import { Button } from "antd";
// Animation
import { TypeAnimation } from "react-type-animation";

// Models
import { SocialButton } from "../models";

import BackgroundAnimation from "./svg/BgAnimation";
import Img from "../../public/assets/photo.png"
import { FaGithub, FaLinkedin } from "react-icons/fa";


const HomeHero = () => {
  const { t, i18n } = useTranslation();

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
                    {i18n.t("hero.label")} <strong>Felipe!</strong>
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
                  </p>
                </div>
              </div>

              <div className={styles.intro_img_wrap} style={{ willChange: "opacity", opacity: 1 }}>
                {/* <aside className={styles.photo_aside}> */}

                <div className={styles.intro_img_blur_bg} style={{ willChange: "opacity", opacity: 1 }}></div>

                <Image
                  src={Img}
                  alt="Imagem de Felipe Rocha"
                  className={styles.intro_img}
                  width={500}
                  height={624}
                  objectFit="contain"
                />

                {/* <div className={styles.intro_img_overlay}></div> */}

                {/* <div className={styles.social_btn}>
                  {SocialButtons.map(({ name, color, link, className }, index) => (
                    <Button key={index} name={name} color={color} href={link} className={className} target="blank">
                      {name}
                    </Button>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default HomeHero;
