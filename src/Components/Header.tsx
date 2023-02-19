// Next
import { useEffect, useState } from "react";

// Styles
import styles from "../styles/Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

// Translate
import { useTranslation } from "react-i18next";
import Link from "./Link";

interface NavigationItemsProps {
  name: string;
  route: string;
  enName: string;
}

const Header = () => {
  const [show, setShow] = useState(false);
  const handleShowMenu = () => setShow(!show);
  const [navbar, setNavBar] = useState(false);
  const { i18n } = useTranslation();

  const [languageSelected, setLanguageSelected] = useState("pt-BR");
  const navigationsItems: NavigationItemsProps[] = [
    {
      name: "Projetos",
      route: "/projetos",
      enName: "Projects",
    },
    {
      name: "Sobre",
      route: "/about",
      enName: "About",
    }
  ];

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
  }, []);

  return (
    <header className={navbar ? `${styles.nav_active}` : `${styles.nav}`}>
      <div className={styles.page_padding}>
        <div className={styles.container}>
          <div className={styles.nav_inner}>
            <div className={styles.logo}>
              <Link className={styles.logo_span} Href="/">
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
                Dev
              </Link>
            </div>

            <div className={styles.menu} onClick={handleShowMenu}>
              <GiHamburgerMenu />
            </div>

            <div className={styles.nav_link}>
              {navigationsItems.map((navItem, index) => (
                <Link
                  key={index}
                  Href={navItem.route}
                  className={styles.link}
                >
                  {navItem.name}
                </Link>
              ))}
            </div>

            <div className={styles.nav_socials}  >
              <button
                onClick={() => {
                  setLanguageSelected("pt-BR");
                  localStorage.setItem("language", "pt-BR");
                  i18n.changeLanguage("pt-BR");
                }}
              >
                pt
              </button>

              <button
                onClick={() => {
                  setLanguageSelected("en");
                  localStorage.setItem("language", "en");
                  i18n.changeLanguage("en");
                }}
              >
                usa
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
