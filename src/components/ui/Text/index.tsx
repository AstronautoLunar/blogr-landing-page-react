import styles from "./styles.module.scss";
import { TextProps } from "../../../types"

const Text = ({ children }: TextProps) => {
    return (
        <span className={styles.Text}>
            { children }
        </span>
    )
}

export default Text;