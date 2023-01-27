import styles from "../styles/Projetcs-Section.module.css";
import Project from "../Components/Project";
import Header from "../Components/Header";
import utils from "../styles/utils.module.css";

import projects from "../data/projects";

const ProjectsPage = () => {
  // const [loading, setLoading] = useState(true);

  return (
    <>
      <Header />
      <section className={`${utils.container} ${styles.projects_container} `}>
        <h2>Projetos</h2>
        <main>
          {projects.map(item => (<Project key={item.id} {...item}/>))}
        </main>
      </section>
    </>
  );
};

export default ProjectsPage;
