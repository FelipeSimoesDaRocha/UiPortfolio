// Next
import Image from "next/image";

// Styles
import styles from "./styles.module.css";

// Animation
import { TypeAnimation } from "react-type-animation";

// Translations
import { useTranslation } from "react-i18next";

import BackgroundAnimation from "./BgAnimation";
import Img from "../../../public/assets/photo.png";
import Banner from "../../../public/assets/banner.png";
import type { } from "css-font-loading-module";


const Hero = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.home_hero}>
      <div className={styles.hero_scroll_wrap}>

        <div className={styles.hero_scroll_trigger}></div>

        <div className={styles.sticky_wrap + " " + styles.sticky_wrap_hero}>
          <div className={styles.overflow_wrap}>
            <div className={styles.hero}
              style={{
                willChange: "transform",
                transform: "translate3d(0px, 0px, 0px) scale3d(0.999891, 0.999891, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d"
              }}>

              <div className={styles.hero_ui}>
              </div>

              <div id="home" className={styles.hero_ui_intro} >
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
                              className={styles.hero_sub_title}
                              sequence={["Developer - Front-end", 1500, "Developer - UX", 1500,]}
                              wrapper="h2"
                              cursor={true}
                              repeat={Infinity}
                            />
                          </div>
                          <div className={`${styles.section_paragraph}` || `${styles.section_paragraph_intro}`}>
                            <p className={styles.text_color_sec}>
                              {t("hero.text")}
                            </p>
                            <blockquote>{t("hero.blockquote")}</blockquote>
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
              </div >

            </div>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Hero

