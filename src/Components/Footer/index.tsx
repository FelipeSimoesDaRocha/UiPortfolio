import Link from "next/link";
import styles from "./style.module.css";

const Footer = () => {
    return (
        <footer id="work" className={styles.footer}>
            <div className={styles.page_padding}>
                <div className={styles.container}>
                    <div className={styles.footer_inner}>
                        <div>© 2023 Felipe Rocha. Todos os direitos reservados.</div>
                        <div className={styles.footer_links} >
                            <Link href={" mailto:Felipe.simoesdarocha@gmail.com"}>
                                <a className={styles.footer_link} target="_blank" aria-label="Contato" rel="noreferrer" >
                                    Contato
                                </a>
                            </Link>
                            <Link href={"/privacy"}>
                                <a className={styles.footer_link} target="_blank" aria-label="Privacidade" rel="noreferrer" >
                                    Privacidade
                                </a>
                            </Link>
                            <Link href={"/legal-notice"} >
                                <a className={styles.footer_link} target="_blank" aria-label="Noticia legal" rel="noreferrer" >
                                    Legal notice
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </footer >
    );
};

export default Footer;
