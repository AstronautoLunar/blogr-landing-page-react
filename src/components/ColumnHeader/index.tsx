import styles from "./styles.module.scss";
import { ColumnHeaderProps } from "../../types";

const ColumnHeader = ({ children }: ColumnHeaderProps) => (
    <div className={styles.ColumnHeader}>
        { children }
    </div>
)

export default ColumnHeader;