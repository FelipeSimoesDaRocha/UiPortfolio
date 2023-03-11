import styles from "./style.module.css";
import packageJson from "../../../package.json"

const packJs = () => {
    const dependencies = packageJson.dependencies;
    const dependencyInfo = Object.entries(dependencies,).map(([packageName, version], index: number) => {
        return (
            <pre key={index} >
                <code className={styles.packageName}>"{packageName}"</code>
                <span className={styles.separator}>:</span>
                <code className={styles.version}>"{version}"</code>
            </pre>
        )
    });

    return (
        <div className={styles.container}>
            {dependencyInfo}
        </div>
    );
};

export default packJs;
