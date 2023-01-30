import styles from "../styles/Projetcs-Section.module.css";
import Project from "../Components/Project";
import Header from "../Components/Header";
import utils from "../styles/utils.module.css";
import { GetStaticProps } from "next";

type Repository = {
  id: number,
  name: string;
  image: string;
  githubUrl: string;
  description: string;
};

type HomeProps = {
  repositories: Repository[];
};


const ProjectsPage = ({ repositories }: HomeProps) => {
  return (
    <>
      <Header />
      <section className={`${utils.container} ${styles.projects_container} `}>
        <h2>Projetos</h2>
        <main>
          {repositories.map(item => (
            <Project key={item.id} {...item} />
          ))}
        </main>
      </section>
    </>
  );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/FelipeSimoesDaRocha/repos');
  const data = await response.json();

  const repositories = data.map((repository: { name: any; description: any; }) => {
    return {
      name: repository.name,
      description: repository.description,
    };
  });

  return {
    props: { repositories, }, revalidate: 60 * 5
  }
}