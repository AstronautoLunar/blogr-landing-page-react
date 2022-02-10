import { AreaButtonsPresentationProps } from "../../types";
import styles from "./styles.module.scss";

const AreaButtonsPresentation = ({ children }: AreaButtonsPresentationProps) => (
    <div className={styles.AreaButtonsPresentation}>
        { children }
    </div>
)

export default AreaButtonsPresentation;