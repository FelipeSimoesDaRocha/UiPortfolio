import styles from "../styles/Separator.module.css";

interface IColor {
  color?: string;
}

const Separator = ({ color }: IColor) => {
  console.log(color);

  //Define a Cor do Background
  const background = !color
    ? "linear-gradient(to right , #13ADC7 , #945DD6)"
    : "linear-gradient(270deg,#F46737 0%,#945DD6 100%)";

  return (
    <div
      className={styles.separator}
      style={{ backgroundImage: background }}
    ></div>
  );
};

export default Separator;
