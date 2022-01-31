import styles from "./styles.module.scss";
import { HeaderProps } from "../../types";

const Header = ({ children }: HeaderProps) => (
    <div id={styles.header}>
        { children }
    </div>
)

export default Header;