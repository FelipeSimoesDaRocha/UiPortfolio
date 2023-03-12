// Next
import { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

// Styles
import styles from "./styles.module.css";

// Icons
import { GiHamburgerMenu } from "react-icons/gi";

// Icons
import { FaGlobeAmericas } from "react-icons/fa";

// Translate
import { useTranslation } from "react-i18next";

// Models
import { LinkItemsProps } from "../../models";


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
  const navigationsItems: LinkItemsProps[] = [
    {
      name: "Projetos",
      route: "/#work",
      enName: "Projects"
    },
    {
      name: "Sobre",
      route: "/#about",
      enName: "About"
    }
  ];

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
                <a aria-label="inicio">
                  Felipe Rocha
                </a>
              </Link>
            </div>

            <div className={styles.menu} onClick={handleShowMenu}>
              <GiHamburgerMenu />
            </div>

            <div className={styles.nav_menu}>
              {navigationsItems.map((navItem, index) => (
                <Link key={index} href={navItem.route}>
                  {languageSelected === "pt" ? navItem.name : navItem.enName}
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
                      onClick={() => setModal(true)}
                      style={{ backgroundImage: `url("${session.user.image}")` }}
                      className={styles.avatar}
                    />
                  )}
                  {!modal ? (
                    <></>
                  ) : (
                    <span id="lang" className={modalStyle ? `${styles.modalDark}` : `${styles.modal}`}>
                      <div className={styles.modalContainer}>
                        <div className={styles.modalHeaderContainer}>
                          <div className={styles.modalHeader}>
                            {session.user.image && (
                              <span
                                style={{ backgroundImage: `url("${session.user.image}")` }}
                                className={styles.avatar}
                              />
                            )}
                            <strong>{session.user.name ?? session.user.email}</strong>
                          </div>
                        </div>
                        <div className={styles.modalHero}>
                          <div className={styles.modalHeroList}>
                            <FaGlobeAmericas />
                            <>
                              <button onClick={() => handleChangeLng("pt")} aria-label="Português">PT</button>
                              <button onClick={() => handleChangeLng("en")} aria-label="English">EN</button>
                            </>
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
                    </span>)
                  }
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
