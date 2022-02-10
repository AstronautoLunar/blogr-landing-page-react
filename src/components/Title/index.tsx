import styles from "./styles.module.scss";
import { TitleProps } from "../../types";

const Title = ({ children }: TitleProps) => (
    <h1 className={styles.Title}>
        { children }
    </h1>
)

export default Title;