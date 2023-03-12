// Next
import { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

// Styles
import styles from "./styles.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

// Translate
import { useTranslation } from "react-i18next";
import { FaGlobeAmericas } from "react-icons/fa";

// Models
import { LinkItemsProps } from "../../models";
import { Button } from "@chakra-ui/react";


const Header = () => {
  const [show, setShow] = useState(false);
  const [navbar, setNavBar] = useState(false);
  const [modalStyle, setModalStyle] = useState(false);

  const [modal, setModal] = useState(false);
  const handleShowMenu = () => setShow(!show);

  const { t, i18n } = useTranslation();

  const { data: session, status } = useSession();
  const loading = status === "loading";

  const [languageSelected, setLanguageSelected] = useState("pt");
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
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }

    if (window.scrollY >= 800) {
      setModalStyle(true);
    } else {
      setModalStyle(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleChangeBackground);
  }, []);

  const handleChangeLng = (lng: string) => {
    setLanguageSelected(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
    setModal(false);
  };

  return (
    <nav className={navbar ? `${styles.nav_active}` : `${styles.nav}`}>
      <div className={styles.page_padding}>
        <div className={styles.container}>
          <div className={styles.nav_inner}>
            <div className={styles.logo} >
              <a href="/#" aria-label="inicio">
                Felipe Rocha
              </a>
            </div>

            <div className={styles.menu} onClick={handleShowMenu}>
              <GiHamburgerMenu />
            </div>

            <div className={styles.nav_menu}>
              {navigationsItems.map((navItem, index) => (
                <Link key={index} href={navItem.route} >
                  {languageSelected ? navItem.name : navItem.enName}
                </Link>
              ))}
            </div>

            <div className={`${!session && loading ? styles.loading : styles.loaded}`}>
              {!session && (
                <Link href={`/api/auth/signin`}>
                  <a
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
                                onClick={() => setModal(true)}
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
                              <Button onClick={() => handleChangeLng("pt")} aria-label="Português"> PT</Button>
                              <Button onClick={() => handleChangeLng("en")} aria-label="English" >EN</Button>
                            </>
                          </div>

                          <a
                            href={`/api/auth/signout`}
                            onClick={(e) => {
                              e.preventDefault()
                              signOut()
                            }}
                          >
                            {t("hero.Signout")}
                          </a>
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
