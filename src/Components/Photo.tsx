import Image from "next/image";
import style from "../styles/Photo.module.css";
import Button from "./SocialButton";
import Img from '../../public/assets/photo.png'

type Socials = {
  name: string;
  color: string;
  link: string;
};

const Photo = () => {
  const TypesSocials = [
    {
      name: "Linkedin",
      color: "#0077b5",
      link: "https://www.linkedin.com/in/felipe-sim%C3%B5es-da-rocha",
    },
    {
      name: "Discord",
      color: "#7289da",
      link: "https://discord.gg/YFpCswADvF",
    },
    {
      name: "Github",
      color: " #333",
      link: "https://github.com/FelipeSimoesDaRocha",
    },
  ] as Socials[];

  return (
    <aside className={style.photo_aside}>
      <div className={style.photo}>
        <Image
          src={Img}
          alt="Imagem de Felipe Rocha"
          className={style.photo}
          width={500}
          height={622}
        />
      </div>

      <div className={style.image_socials}>
        {TypesSocials.map(({ name, color, link }, index) => (
          <Button key={index} text={name} color={color} link={link} />
        ))}
      </div>
    </aside>
  );
};

export default Photo;
