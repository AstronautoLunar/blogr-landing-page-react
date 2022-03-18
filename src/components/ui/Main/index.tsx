import styles from "./styles.module.scss";

import { MainProps } from "../../../types";

const Main = ({ children }: MainProps) => {
    return (
        <main id={styles.Main}>
            { children }
        </main>
    )
}

export default Main;