// Next
import { useEffect, useState } from "react";
import Link from "next/link";

// Styles
import styles from "./styles.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

// Translate
import { useTranslation } from "react-i18next";
import { FaGlobeAmericas } from "react-icons/fa";

// Components
import { Button, Col, Row } from "antd";
import Logotipo from "../svg/Logotipo";

// Models
import { LinkItemsProps } from "../../models";


const Header = () => {
  const [show, setShow] = useState(false);
  const [navbar, setNavBar] = useState(false);
  const [lang, setLangDark] = useState(false);

  const [modalLang, setModalLang] = useState(false);
  const handleShowMenu = () => setShow(!show);

  const { i18n } = useTranslation();

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
      setLangDark(true)
    } else {
      setLangDark(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleChangeBackground);
  }, []);

  const handleChangeLng = (lng: string) => {
    setLanguageSelected(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
    setModalLang(false)
  }

  return (
    <Row gutter={[16, 8]} justify="space-around" className={navbar ? `${styles.nav_active}` : `${styles.nav}`}>
      <Col className={styles.logo}>
        <Link href="/#" aria-label="inicio" >
          <Logotipo />
        </Link>
      </Col>

      <Col className={styles.menu} onClick={handleShowMenu}>
        <GiHamburgerMenu />
      </Col>

      <Col className={styles.nav_link}>
        {navigationsItems.map((navItem, index) => (
          <Link key={index} href={navItem.route} >
            {navItem.name}
          </Link>
        ))}
      </Col>

      <Col className={styles.nav_lang}  >
        <Button
          onClick={() => setModalLang(true)}
          icon={<FaGlobeAmericas />}
          aria-label="Seleção de idioma"
          type="text"
        />

        {!modalLang ? (
          <></>
        ) : (<span id="lang" className={lang ? `${styles.langDark}` : `${styles.lang}`}>
          <Button onClick={() => handleChangeLng("pt")} aria-label="Português"> PT</Button>
          <Button onClick={() => handleChangeLng("en")} aria-label="English" >EN</Button>
        </span>)
        }
      </Col>
    </Row>
  );
};

export default Header;
