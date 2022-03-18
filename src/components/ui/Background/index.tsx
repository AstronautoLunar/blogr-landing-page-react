import styles from "./styles.module.scss";
import { BackgroundProps } from "../../../types";

const Background = ({ children }: BackgroundProps) => (
    <div className={styles.background}>
        { children }
    </div>
);

export default Background;