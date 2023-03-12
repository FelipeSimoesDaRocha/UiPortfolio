import styles from "./style.module.css";
import packageJson from "../../../package.json"

const packJs = () => {
    const dependencies = packageJson.dependencies;
    const dependencyInfo = Object.entries(dependencies)

    return (
        <div className={styles.container}>
            {dependencyInfo.map(([packageName, version], index: number) => {
                return (
                    <pre key={index} >
                        <code className={styles.packageName}>&#34;{packageName}&#34;</code>
                        <span className={styles.separator}>:</span>
                        <code className={styles.version}>&#34;{`${version}`} &#34;</code>
                    </pre>
                );
            })}
        </div>
    );
};

export default packJs;