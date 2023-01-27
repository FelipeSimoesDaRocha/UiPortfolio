import styles from "../styles/Social_Button.module.css";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

type props = {
  type?: string;
  text: string;
  color: string;
  link: string;
};

const Button = ({ text, color, link }: props) => {
  function returnIcon(icon: string) {
    switch (icon) {
      case "Discord":
        return <FaDiscord />;
      case "Linkedin":
        return <FaLinkedin />;
      case "Github":
        return <FaGithub />;
      default:
        break;
    }
  }
  return (
    <a href={link} className={styles.a_link} style={{ backgroundColor: color }}>
      {returnIcon(text)}
      <span>{text}</span>
    </a>
  );
};

export default Button;
