import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.page_padding}>
                <div className={styles.container}>
                    <div className={styles.footer_inner}>
                        <div>© 2023 Felipe Rocha. Todos os direitos reservados.</div>
                        <div className={styles.footer_links}>
                            <a href={"Felipe,simoesdarocha@gmail.com"} className={styles.footer_link} children={"Contato"} target="_blank" aria-label="Contato" />
                            <a href={"/privacy"} className={styles.footer_link} children={"Privacidade"} target="_blank" aria-label="Privacidade" />
                            <a href={"/legal-notice"} className={styles.footer_link} children={"Legal notice"} target="_blank" aria-label="Noticia legal" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
