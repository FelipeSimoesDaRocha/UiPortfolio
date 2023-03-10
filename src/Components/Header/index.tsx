// Next
import { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react"

// Styles
import styles from "./styles.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

// Translate
import { useTranslation } from "react-i18next";
import { FaGlobeAmericas } from "react-icons/fa";

// Components
import { Button, Col, Row } from "antd";

// Models
import { LinkItemsProps } from "../../models";


const Header = () => {
  const [show, setShow] = useState(false);
  const [navbar, setNavBar] = useState(false);
  const [modalStyle, setModalStyle] = useState(false);

  const [modal, setModal] = useState(false);
  const handleShowMenu = () => setShow(!show);

  const { t, i18n } = useTranslation();

  const { data: session } = useSession()

  const [languageSelected, setLanguageSelected] = useState("")
  const navigationsItems: LinkItemsProps[] = [
    {
      name: "Projetos",
      route: "/#work",
      enName: "Projects",
    },
    {
      name: "Sobre",
      route: "/#about",
      enName: "About",
    }
  ]

  const handleChangeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }

    if (window.scrollY >= 800) {
      setModalStyle(true)
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
    setModal(false)
  }

  return (
    <Row gutter={[16, 8]} justify="space-around" className={navbar ? `${styles.nav_active}` : `${styles.nav}`}>
      <Col className={styles.logo}>
        <Link href="/#" aria-label="inicio" >
          <svg
            stroke="currentColor"
            fill="#fff"
            strokeWidth="0"
            version="1.1"
            viewBox="0 0 32 32"
            height="2rem"
            width="2rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.632 5.289c-0.613 0.129-1.823 0.565-2.662 0.984-1.275 0.613-1.759 0.968-2.921 2.13s-1.517 1.646-2.13 2.921c-1.646 3.373-1.646 6.6 0 10.005 0.613 1.291 0.952 1.759 2.13 2.921 1.178 1.178 1.63 1.501 2.921 2.13 1.969 0.936 2.921 1.162 5.002 1.162s3.034-0.226 5.002-1.162c1.275-0.613 1.727-0.952 2.921-2.13 1.178-1.194 1.517-1.646 2.13-2.921 0.774-1.63 1-2.388 1.178-4.002l0.113-1h-3.195l-0.21 1.243c-1.017 6.471-8.907 9.069-13.587 4.47-3.792-3.712-2.969-10.005 1.678-12.732 0.871-0.516 2.63-1.049 3.437-1.049h0.532v-3.227l-0.597 0.016c-0.339 0-1.113 0.113-1.743 0.242zM14.213 9.645c-3.421 0.92-5.648 4.325-5.067 7.745 0.662 3.792 4.212 6.39 7.891 5.761 3.776-0.645 6.39-4.212 5.761-7.859-0.71-4.115-4.647-6.713-8.585-5.648z"></path>
          </svg>

        </Link>
      </Col>

      <Col className={styles.menu} onClick={handleShowMenu}>
        <GiHamburgerMenu />
      </Col>

      <Col className={styles.nav_link}>
        {navigationsItems.map((navItem, index) => (
          <Link key={index} href={navItem.route} >
            {languageSelected ? navItem.name : navItem.enName}
          </Link>
        ))}
      </Col>

      <Col>
        {!session && (
          <Button
            href={`/api/auth/signin`}
            onClick={(e) => {
              e.preventDefault()
              signIn()
            }}
          >
            {t("hero.Signin")}
          </Button>
        )}
        {session?.user && (
          <>
            {session.user.image && (
              <span
                onClick={() => setModal(true)}
                style={{ backgroundImage: `url('${session.user.image}')` }}
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
                          style={{ backgroundImage: `url('${session.user.image}')` }}
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
      </Col>
    </Row>
  );
};

export default Header;
