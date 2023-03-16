// Next
import Image from "next/future/image";
// Styles
import styles from "./styles.module.css";

// Animation
import { TypeAnimation } from "react-type-animation";

// Translations
import { useTranslation } from "react-i18next";

import BackgroundAnimation from "./BgAnimation";
import Img from "../../../public/assets/photo.png";
import heroUiImg from "../../../public/assets/heroUiImg.webp"

import Banner from "../../../public/assets/banner.png";
import type { } from "css-font-loading-module";


const Hero = () => {
  const { t } = useTranslation();

  return (
    <header id="home" className={styles.home_hero}>
      <div className={styles.page_padding}>
        <div className={styles.container}>
          <div className={styles.home_hero_header}>
            <div className={styles.home_hero_title}>
              <h1 className={styles.home_hero_heading}>
                {/* <font style={{ verticalAlign: "inherit" }}> */}
                  Sites Ui UX excepcionais.
                {/* </font> */}
              </h1>
            </div>
            <div className={styles.home_hero_subTitle}>
              <p className="text-color-sec" >
                {/* <font style={{ verticalAlign: "inherit" }}> */}
                  Desenvolvimento Front-End de ponta para empresas voltadas para o design, onde a atenção aos detalhes e a dedicação apaixonada são importantes.&nbsp;
                {/* </font> */}
              </p>
            </div>

            {/* <a cursor-ix="true" href="#project-request" className="cta w-inline-block"
              style={{ transform: "translate(0px, 0px) scale(1, 1)" }}>
              <div className="text-block">
                <p style={{ verticalAlign: "inherit" }}>
                  <p style={{ verticalAlign: "inherit" }}>
                    Iniciar uma solicitação de projeto
                  </p>
                </p>
              </div>
              <div className="cta-chevron w-embed">
                &#10095;
              </div>
            </a> */}

          </div>
        </div>
      </div>

      <div className={styles.hero_scroll_wrap}>
        {/* <div className={styles.hero_scroll_trigger}></div> */}
        <div className={styles.sticky_wrap + " " + styles.sticky_wrap_hero}>
          <div className={styles.overflow_wrap}>
            <div className={styles.hero}
              style={{
                willChange: "transform",
                transform: "translate3d(0px, 0px, 0px) scale3d(0.36, 0.36, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d"
              }}>
              <div className={styles.hero_ui} style={{ willChange: "opacity", opacity: 1 }}>
                <Image
                  src={heroUiImg}
                  alt="Display with a blue mountain wallpaper"
                  className={styles.hero_ui_img}
                  width={1959}
                  height={1225}
                />
                <div className={styles.hero_ui_inner}>
                  <div className={styles.hero_ui_vid_wrap}
                    style={{
                      willChange: "transform",
                      transform: "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d"
                    }}
                  >
                    <div className={styles.hero_anim_video + " " + styles.w_embed}>
                      <div data-wf-ignore="true" className={styles.hero_anim_video + " " + styles.w_background_video}>
                        <video autoPlay loop muted playsInline data-wf-ignore="true" data-object-fit="cover">
                          <source src="https://d1ytx91mb072w7.cloudfront.net/showreel-hero-final.mp4" />
                        </video>
                      </div>
                    </div>
                  </div>

                  <div className={styles.hero_ui_window}
                    style=
                    {{
                      willChange: "transform",
                      transform: "translate3d(130%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d"
                    }}
                  >

                    <div className="hero-ui-webflow-loader" style={{ willChange: "opacity", opacity: 1 }}>
                      <div className="hero-ui-webflow-logo w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 134 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <path d="M43.2309524,13.3744076 C43.2309524,10.957346 40.8380952,8.37914692 36.85,8.37914692 C32.3833333,8.37914692 27.2785714,11.7630332 26.4809524,18.5308057 C25.6833333,25.2985782 29.8309524,28.3601896 34.1380952,28.3601896 C38.4452381,28.3601896 40.5190476,26.7488152 42.752381,24.492891 C40.8380952,22.0758294 38.2857143,23.2037915 37.8071429,23.3649289 C37.3285714,23.6872038 36.5309524,24.0094787 35.2547619,24.0094787 C33.6595238,24.0094787 31.9047619,23.2037915 31.9047619,20.1421801 C42.4333333,19.014218 43.2309524,15.7914692 43.2309524,13.3744076 Z M38.1261905,13.6966825 C38.1261905,14.5023697 37.8071429,15.7914692 32.5428571,16.436019 C33.6595238,12.4075829 35.7333333,12.0853081 36.6904762,12.0853081 C37.647619,12.2464455 38.1261905,12.8909953 38.1261905,13.6966825 Z M20.4190476,14.3412322 C20.4190476,14.3412322 18.1857143,21.4312796 18.0261905,22.0758294 C18.0261905,21.4312796 16.2714286,8.7014218 16.2714286,8.7014218 C12.4428571,8.7014218 10.3690476,11.4407583 9.41190476,14.3412322 C9.41190476,14.3412322 6.7,21.4312796 6.54047619,22.0758294 C6.38095238,21.5924171 6.06190476,14.5023697 6.06190476,14.5023697 C5.74285714,10.957346 2.55238095,8.7014218 0,8.7014218 L3.19047619,28.0379147 C7.17857143,28.0379147 9.41190476,25.2985782 10.5285714,22.3981043 C10.5285714,22.3981043 12.9214286,16.1137441 13.0809524,15.7914692 C13.0809524,16.1137441 14.8357143,28.0379147 14.8357143,28.0379147 C18.8238095,28.0379147 21.0571429,25.4597156 22.1738095,22.7203791 L27.7571429,8.7014218 C23.6095238,8.7014218 21.5357143,11.4407583 20.4190476,14.3412322 Z M58.0666667,8.21800948 C55.6738095,8.21800948 53.7595238,9.507109 52.1642857,11.6018957 L53.4404762,0 C50.0904762,0 47.5380952,2.90047393 46.9,7.09004739 L44.347619,27.8767773 C46.2619048,27.8767773 48.1761905,27.3933649 49.2928571,25.943128 C50.25,27.2322275 51.6857143,28.1990521 53.7595238,28.1990521 C59.3428571,28.1990521 63.1714286,21.7535545 63.1714286,15.6303318 C63.3309524,9.99052133 60.6190476,8.21800948 58.0666667,8.21800948 Z M57.4285714,18.2085308 C56.7904762,21.5924171 55.0357143,23.8483412 53.1214286,23.8483412 C51.3666667,23.8483412 50.5690476,23.042654 50.5690476,23.042654 C50.8880952,20.1421801 51.2071429,18.2085308 51.8452381,16.5971564 C52.4833333,14.985782 54.0785714,12.5687204 55.6738095,12.5687204 C57.2690476,12.7298578 58.0666667,14.8246445 57.4285714,18.2085308 Z M77.2095238,8.7014218 L73.3809524,8.7014218 L73.3809524,8.54028436 C73.7,5.96208531 74.1785714,4.67298578 76.252381,4.51184834 C77.5285714,4.3507109 78.1666667,3.70616114 78.3261905,2.90047393 C78.4857143,2.25592417 78.8047619,0.161137441 78.8047619,0.161137441 C70.9880952,0.161137441 68.5952381,3.5450237 67.9571429,8.7014218 L67.9571429,8.86255924 L67.797619,8.86255924 C66.5214286,8.86255924 65.0857143,10.3127962 64.9261905,12.0853081 L64.7666667,12.7298578 L67.3190476,12.7298578 L65.0857143,30.7772512 L64.447619,34 C64.6071429,34 64.6071429,34 64.7666667,34 C68.4357143,33.8388626 70.6690476,30.9383886 71.3071429,26.7488152 L73.0619048,12.5687204 L74.3380952,12.5687204 C75.4547619,12.5687204 76.8904762,11.4407583 77.2095238,9.34597156 L77.2095238,8.7014218 Z M97.3095238,8.37914692 C92.8428571,8.37914692 88.6952381,11.7630332 87.4190476,16.9194313 C86.1428571,22.0758294 88.0571429,28.3601896 94.597619,28.3601896 C101.138095,28.3601896 104.966667,21.9146919 104.966667,16.5971564 C104.807143,11.2796209 101.297619,8.37914692 97.3095238,8.37914692 Z M99.0642857,18.0473934 C98.9047619,20.464455 97.7880952,24.0094787 94.9166667,24.0094787 C92.0452381,24.0094787 92.5238095,19.8199052 92.6833333,17.8862559 C93.002381,15.7914692 94.1190476,12.7298578 96.6714286,12.7298578 C99.0642857,12.7298578 99.3833333,15.4691943 99.0642857,18.0473934 Z M126.980952,14.3412322 C126.980952,14.3412322 124.747619,21.4312796 124.588095,22.0758294 C124.588095,21.4312796 122.833333,8.7014218 122.833333,8.7014218 C119.004762,8.7014218 116.930952,11.4407583 115.97381,14.3412322 C115.97381,14.3412322 113.261905,21.4312796 113.102381,22.0758294 C113.102381,21.5924171 112.62381,14.5023697 112.62381,14.5023697 C112.464286,10.957346 109.114286,8.86255924 106.561905,8.86255924 L109.752381,28.1990521 C113.740476,28.1990521 115.97381,25.4597156 117.090476,22.5592417 C117.090476,22.5592417 119.483333,16.2748815 119.642857,15.9526066 C119.642857,16.2748815 121.397619,28.1990521 121.397619,28.1990521 C125.385714,28.1990521 127.619048,25.6208531 128.735714,22.8815166 L134,8.7014218 C130.011905,8.7014218 127.938095,11.4407583 126.980952,14.3412322 Z M80.8785714,0.161137441 L77.6880952,26.5876777 L77.05,29.8104265 C77.2095238,29.8104265 77.2095238,29.8104265 77.3690476,29.8104265 C80.8785714,29.8104265 83.4309524,26.5876777 83.75,22.7203791 L85.6642857,7.57345972 C86.1428571,3.06161137 83.2714286,0.161137441 80.8785714,0.161137441 Z" fill="#11181C"></path>
                        </svg>
                      </div>
                      <div className="hero-ui-wf-bar">
                        <div className="hero-ui-wf-bar-active"
                          style={{
                            willChange: "transform",
                            transform: "translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d"
                          }}>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className={styles.hero_ui_intro} style={{ display: "none" }} >
                <BackgroundAnimation />
                <div className={styles.page_padding}>
                  <div className={styles.container}>
                    <div className={styles.ui_intro_inner}>
                      <div className={styles.intro_wrap}>
                        <div className={styles.intro_content}>
                          <div className={styles.heading_ui_wrap}
                            style={{
                              willChange: "transform, opacity",
                              transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                              opacity: 1
                            }}
                          >
                            <h2 className={styles.hero_title}>
                              {/* <font> */}
                                {t("hero.label")} <strong>Felipe!</strong>
                              {/* </font> */}
                            </h2>
                            <TypeAnimation
                              className={styles.hero_sub_title}
                              sequence={["Developer - Front-end", 1500, "Developer - UX", 1500,]}
                              wrapper="h2"
                              cursor={true}
                              repeat={Infinity}
                            />
                          </div>
                          <div className={`${styles.section_paragraph}` + " " + `${styles.section_paragraph_intro}`}
                            style={{
                              willChange: "transform, opacity",
                              transform: "translate3d(0px, 20px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                              opacity: 1
                            }}
                          >
                            <p className={styles.text_color_sec}>
                              {t("hero.text")}
                            </p>
                            <blockquote>{t("hero.blockquote")}</blockquote>
                          </div>
                        </div>
                        <div className={styles.intro_img_wrap} style={{ willChange: "opacity", opacity: 1 }}>
                          <div className={styles.intro_img_blur_bg} style={{ willChange: "opacity", opacity: 1 }} />
                          <div className={styles.banner}>
                            <Image
                              src={Banner}
                              alt="Imagem de Felipe Rocha"
                              className={styles.intro_img}
                              width={750}
                              height={624}
                            />
                          </div>
                          <Image
                            src={Img}
                            alt="Imagem de Felipe Rocha"
                            className={styles.intro_img}
                            width={500}
                            height={624}
                          />
                          <div className={styles.intro_img_overlay}></div>
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
    </header >
  );
}

export default Hero

