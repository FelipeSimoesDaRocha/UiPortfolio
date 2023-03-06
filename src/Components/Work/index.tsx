import styles from "./styles.module.css";
import Image from "next/image";
import img from "../../../public/assets/img.png"
import img2 from "../../../public/assets/img2.png"
import img3 from "../../../public/assets/img3.png"
import img4 from "../../../public/assets/img4.png"

// Models
import { Project } from "../../models";


const Work = () => {
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
                        <h2> Uma pequena seleção do meu trabalho.</h2>
                    </div>
                    <div className={styles.projects_wrap}>
                        <div className={styles.projects_list_wrapper}>
                            <div className={styles.projects_list}>
                                {project.map(item => (
                                    <div key={item.key} className={styles.projects_list_item} style={{ display: "block" }}>
                                        <div className={styles.projects_list_item_link} style={{ transform: "translate(0px, 0px) scale(1, 1)" }}>
                                            <div className={styles.projects_list_item_wrap}>
                                                <div className={styles.project_list_item_container}>
                                                    <div className={styles.project_item_close} style={{ backgroundColor: "rgba(29, 29, 31, 0.8)", color: "#afafb5" }}>
                                                        <div className={styles.project_item_close_icon}>
                                                            <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path d="M4,4 L16,16 M16,4 L4,16" id="Combined-Shape-Copy" stroke="currentColor" strokeWidth="2" transform="translate(10.000000, 10.000000) rotate(45.000000) translate(-10.000000, -10.000000) "></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>

                                                    <div className={styles.project_list_img_wrap}>
                                                        <div className={styles.project_list_item_bg}>
                                                            <div className={styles.project_list_item_bg}>
                                                                <div className={styles.project_list_item_bg} style={{ background: item.background }}></div>
                                                            </div>
                                                        </div>
                                                        <div className={styles.project_list_img_inner}>
                                                            <div className={styles.project_item_vid}>
                                                                <video width="100%" loop muted playsInline preload="none" >
                                                                    <source src="" type="video/mp4" />
                                                                </video>
                                                            </div>
                                                            <Image src={item.imgUrl} width={1960} height={1020} className={styles.projects_list_img} alt={item.alt} />
                                                            <div style={{ backgroundColor: "rgba(29, 29, 31, 0.8)" }} className={styles.project_item_pause_button}>
                                                                <div style={{ color: "#afafb5" }} className="project-video-icon project-video-icon--play w-embed">
                                                                    <svg width="10px" height="11px" viewBox="0 0 10 11" version="1.1" xmlns="http://www.w3.org/2000/svg"> <g id="Project-Images" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g fill="currentColor" fillRule="nonzero"> <path d="M0.947560571,11 C1.08435342,11 1.21787613,10.9771858 1.3481287,10.9315574 C1.47838126,10.885929 1.62114497,10.818447 1.77641983,10.7291114 L9.19749712,6.50180767 C9.47570332,6.3410676 9.67900536,6.18639531 9.80740321,6.0377908 C9.93580107,5.88918629 10,5.70889805 10,5.49692609 C10,5.28623492 9.93580107,5.10626688 9.80740321,4.95702197 C9.67900536,4.80777706 9.47570332,4.65483385 9.19749712,4.49819233 L1.77641983,0.266662009 C1.62114497,0.178799311 1.47838126,0.112389968 1.3481287,0.0674339807 C1.21787613,0.0224779936 1.08435342,0 0.947560571,0 C0.678920755,0 0.453834039,0.0951632434 0.272300424,0.28548973 C0.0907668079,0.475816217 0,0.73597818 0,1.06597562 L0,9.92979775 C0,10.2597952 0.0907668079,10.5206616 0.272300424,10.712397 C0.453834039,10.9041323 0.678920755,11 0.947560571,11 Z"></path></g></g></svg>
                                                                </div>
                                                                <div style={{ color: "#afafb5" }} className="project-video-icon project-video-icon--pause w-embed">
                                                                    <svg width="8px" height="14px" viewBox="0 0 8 14" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Project-Images" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g fill="currentColor" fillRule="nonzero"><path d="M1.04381769,14 C1.34414778,14 1.59411711,13.9028587 1.7937257,13.7085761 C1.99333429,13.5142936 2.09313859,13.2730732 2.09313859,12.9849152 L2.09313859,1.02071994 C2.09313859,0.728890515 1.99333429,0.48581317 1.7937257,0.291487902 C1.59411711,0.097162634 1.34414778,0 1.04381769,0 C0.747156409,0 0.499021474,0.097162634 0.299412885,0.291487902 C0.0998042948,0.48581317 0,0.728890515 0,1.02071994 L0,12.9849152 C0,13.2730732 0.0998042948,13.5142936 0.299412885,13.7085761 C0.499021474,13.9028587 0.747156409,14 1.04381769,14 Z M6.9506791,14 C7.24930277,14 7.4988455,13.9028587 7.6993073,13.7085761 C7.8997691,13.5142936 8,13.2730732 8,12.9849152 L8,1.02071994 C8,0.728890515 7.8997691,0.48581317 7.6993073,0.291487902 C7.4988455,0.097162634 7.24930277,0 6.9506791,0 C6.65410314,0 6.40598954,0.097162634 6.20633829,0.291487902 C6.00668704,0.48581317 5.90686141,0.728890515 5.90686141,1.02071994 L5.90686141,12.9849152 C5.90686141,13.2730732 6.00668704,13.5142936 6.20633829,13.7085761 C6.40598954,13.9028587 6.65410314,14 6.9506791,14 Z"></path></g></g></svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <div className={styles.project_item_info_wrap}></div> */}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                    <div className={styles.project_overlay} style={{ opacity: 0, display: "none" }}></div>
                </div>
            </div>
        </section >
    );
};

export default Work;
