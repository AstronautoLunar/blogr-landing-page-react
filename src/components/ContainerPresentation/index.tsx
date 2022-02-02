import { ContainerPresentationProps } from "../../types";
import styles from "./styles.module.scss";

const ContainerPresentation = ({ children }: ContainerPresentationProps) => (
    <div className={styles.containerPresentation}>
        { children }
    </div>
)

export default ContainerPresentation;