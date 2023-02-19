import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.page_padding}>
                <div className={styles.container}>
                    <div className={styles.footer_inner}>
                        <div>© 2023 Felipe Rocha. Todos os direitos reservados.</div>
                        <div className={styles.footer_links}>
                            <a href={"Felipe,simoesdarocha@gmail.com"} className={styles.footer_link} target="_blank" aria-label="Contato" rel="noreferrer" >
                                Contato
                            </a>
                            <a href={"/privacy"} className={styles.footer_link} target="_blank" aria-label="Privacidade" rel="noreferrer" >
                                Privacidade
                            </a>
                            <a href={"/legal-notice"} className={styles.footer_link} target="_blank" aria-label="Noticia legal" rel="noreferrer" >
                                Legal notice
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
