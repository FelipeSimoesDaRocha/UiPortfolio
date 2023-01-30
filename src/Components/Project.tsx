import styles from "../styles/Project-Single.module.css";

type ProjectType = {
  name: string;
  image: string;
  githubUrl: string;
  description: string;
};


const Project = ({ githubUrl, name, image, description }: ProjectType) => {
  return (
    <div className={styles.project_card}>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={styles.img_wrapper}
      ></div>
      <h3 className={styles.project_title}>{name}</h3>
      <main className={styles.card_main}>
        <p>{description}</p>
      </main>
      <footer className={styles.project_footer}>
        <a href={githubUrl} target="blank">
          Code
        </a>
      </footer>
    </div>
  );
};

export default Project;
