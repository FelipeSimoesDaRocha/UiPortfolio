import styles from "./styles.module.css";
import Image from "next/image";
import img from "../../../public/assets/img.png"
import img2 from "../../../public/assets/img2.png"
import img3 from "../../../public/assets/img3.png"
import img4 from "../../../public/assets/img4.png"

import { useTranslation } from "react-i18next";

// Models
import { Project } from "../../models";

const Work = () => {
    const { t } = useTranslation();

    const project = [
        {
            key: 1,
            background: "linear-gradient(45deg, #9862f0 0%, #3dc5be 100%)",
            alt: "Imagem do projeto",
            imgUrl: img,
            video: "",
            linkGit: "",
            linkProdution: "",
        },
        {
            key: 2,
            background: "linear-gradient(45deg, #bd8e57 0%, #384588 100%)",
            alt: "Imagem do projeto",
            imgUrl: img2,
            video: "",
            linkGit: "https://github.com/FelipeSimoesDaRocha/UiFinances",
            linkProdution: "https://ui-finances.vercel.app/",
        },
        {
            key: 3,
            background: "linear-gradient(45deg, #3a3c47 0%, #6b7077 100%)",
            alt: "Imagem do projeto",
            imgUrl: img3,
            video: "",
            linkGit: "https://github.com/WarwickBr1/Ntf-expert",
            linkProdution: "https://ntf-expert.vercel.app/",
        },
        {
            key: 4,
            background: "linear-gradient(45deg, #f4ba24 0%, #ed5456 100%)",
            alt: "Imagem do projeto",
            imgUrl: img4,
            video: "",
            linkGit: "https://github.com/WarwickBr1/Dev-expert",
            linkProdution: "https://dev-expert-ten.vercel.app/",
        }
    ] as unknown as Project[];

    return (
        <section id="work" className={styles.section}>
            <div className={styles.page_padding}>
                <div className={styles.container}>
                    <div className={styles.section_header}>
                        {/* <h2> Uma pequena seleção do meu trabalho.</h2> */}
                        <h2> {t("work.label")}</h2>
                    </div>
                    <div className={styles.projects_list}>
                        {project.map(item => (
                            <div key={item.key} className={styles.list_item}>
                                <div className={styles.item_container}>
                                    <div className={styles.list_img_wrap}>
                                        <div className={styles.list_item_bg} style={{ background: item.background }}></div>
                                        <div className={styles.list_img_inner}>
                                            <Image src={item.imgUrl} width={1960} height={1020} alt={item.alt} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Work;
