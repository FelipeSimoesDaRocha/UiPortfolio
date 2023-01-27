import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiAdonisjs,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { FaCss3, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { BsServer } from "react-icons/bs";

import Header from "../Components/Header";
import Title from "../Components/SectionTitle";

import styles from "../styles/Tecnologies-Page.module.css";
import global from "../styles/utils.module.css";

const TecnologiesPage = () => {
  return (
    <>
      <Header />
      <section className={`${global.container} ${styles.tecnologies_page}`}>
        <Title>Tecnologias</Title>
        <p>
          Já trabalhei com diversas tecnologias do mundo de desenvolvimento web
          , sendo elas tanto de front-ent quanto de back-end!
        </p>
        <footer className={styles.tecnologies_footer}>
          <div>
            <h4>
              <FaReact fill="skyblue" className={styles.react_logo} /> Front-End
            </h4>
            <ul>
              <li>
                <FaReact fill="skyblue" />
                React
              </li>
              <li>
                <SiNextdotjs fill="#fff" /> Next JS
              </li>
              <li>
                <FaHtml5 fill="#e95f25" /> Html
              </li>
              <li>
                <FaCss3 fill="#12a1dd" /> <FaSass fill="#cb669a" /> CSS/SASS
              </li>
            </ul>
          </div>

          <div>
            <h4>
              <BsServer />
              Back-End
            </h4>
            <ul>
              <li>
                <SiNodedotjs fill="#8fc43e" />
                Node
              </li>
              <li>
                <SiExpress fill="#fff" />
                Express JS
              </li>
              <li>
                <SiAdonisjs fill="#1f004e" />
                Adonis JS
              </li>
              <li>
                <SiNestjs fill="#df214d" />
                Nest JS
              </li>
              <li>
                <SiPostgresql fill="#306493" /> <SiMongodb fill="#4cad45" />{" "}
                SQL/NOSQL
              </li>
            </ul>
          </div>
          <div>
            <h4>
              <SiJavascript fill="#f5dd1b" />
              Linguagens
            </h4>
            <ul>
              <li>
                <SiJavascript fill="#f5dd1b" /> Javascript
              </li>
              <li>
                <SiTypescript fill="#0079cc" />
                Typescript
              </li>
              <li>
                <SiPython />
                Python
              </li>
            </ul>
          </div>
        </footer>
      </section>
    </>
  );
};

export default TecnologiesPage;
