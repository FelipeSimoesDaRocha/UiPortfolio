// Next
import { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

// Styles
import styles from "./styles.module.css";

// Icons
import { FaGlobeAmericas, FaHouseUser } from "react-icons/fa";

// Translate
import { useTranslation } from "react-i18next";

// Models
import { LinkItemsProps } from "../../models";

const navigationsItems: LinkItemsProps[] = [
  {
    name: "Projetos",
    route: "/#work",
    enName: "Projects",
    tabIndex: 2,
    ariaLabel: "Projects"
  },
  {
    name: "Sobre",
    route: "/#about",
    enName: "About",
    tabIndex: 3,
    ariaLabel: "About"
  }
];


const Header = () => {
  const [show, setShow] = useState(false);
  const [navbar, setNavBar] = useState(false);
  const [modalStyle, setModalStyle] = useState(false);

  const [modal, setModal] = useState(false);
  const handleShowMenu = () => setShow(!show);

  const { t, i18n } = useTranslation();

  const { data: session, status } = useSession();
  const loading = status === "loading";

  const [languageSelected, setLanguageSelected] = useState("");

  const handleChangeBackground = () => {
    setNavBar(window.scrollY >= 80);
    setModalStyle(window.scrollY >= 800);
  };

  const handleChangeLng = (lng: string) => {
    setLanguageSelected(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
    setModal(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleChangeBackground);
    const item = `${localStorage.getItem('i18nextLng')}`;
    setLanguageSelected(item);
  }, []);

  return (
    <nav className={navbar ? `${styles.nav_active}` : `${styles.nav}`}>
      <div className={styles.page_padding}>
        <div className={styles.container}>
          <div className={styles.nav_inner}>
            <div className={styles.logo} >
              <Link href="/#">
                <a aria-label="inicio" tabIndex={1}>
                  Felipe Rocha
                </a>
              </Link>
            </div>
            <div className={styles.menu} onClick={handleShowMenu}>
              <FaHouseUser />
            </div>
            <div className={styles.nav_menu}>
              {navigationsItems.map((navItem, index) => (
                <Link key={index} href={navItem.route} >
                  <a aria-label={navItem.ariaLabel} tabIndex={navItem.tabIndex}>
                    {languageSelected === "pt" ? navItem.name : navItem.enName}
                  </a>
                </Link>
              ))}
            </div>
            <div className={`${!session && loading ? styles.loading : styles.loaded}`}>
              {!session && (
                <Link href={`/api/auth/signin`}>
                  <a
                    aria-label="Login"
                    onClick={(e) => {
                      e.preventDefault()
                      signIn()
                    }}
                  >
                    {t("hero.Signin")} &#10095;
                  </a>
                </Link>
              )}
              {session?.user && (
                <>
                  {session.user.image && (
                    <span
                      tabIndex={4}
                      onClick={() => setModal(true)}
                      style={{ backgroundImage: `url("${session.user.image}")` }}
                      className={styles.avatar}
                    />
                  )}
                  {!modal ? (
                    <></>
                  ) : (
                    <div className={modalStyle ? `${styles.modal_active}` : `${styles.modal}`}>
                      <div className={styles.page_padding_modal}>
                        <div className={styles.modal_container}>
                          <div className={styles.modal_inner}>
                            <div className={styles.modal_header}>
                              <div className={styles.modal_header_content}>
                                {session.user.image && (
                                  <span
                                    style={{ backgroundImage: `url("${session.user.image}")` }}
                                    className={styles.avatar}
                                  />
                                )}
                                <strong>{session.user.name ?? session.user.email}</strong>
                              </div>
                            </div>
                            <div className={styles.modal_hero}>
                              <div className={styles.modal_hero_content}>
                                <div className={styles.list}>
                                  <div className={styles.icon}>
                                    <FaGlobeAmericas size={20} />
                                  </div>
                                  <span>
                                    <button className={languageSelected === "pt" ? `${styles.btnActive}` : `${styles.btnLng}`} onClick={() => handleChangeLng("pt")} aria-label="Português">PT</button>
                                    <button className={languageSelected === "en" ? `${styles.btnActive}` : `${styles.btnLng}`} onClick={() => handleChangeLng("en")} aria-label="English">EN</button>
                                  </span>
                                  <span />
                                </div>
                              </div>
                            </div>
                            <Link href={`/api/auth/signout`}>
                              <a
                                aria-label="Sair"
                                onClick={(e) => {
                                  e.preventDefault()
                                  signOut()
                                }}
                              >
                                {t("hero.Signout")}
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>)
                  }
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav >
  );
};

export default Header;
