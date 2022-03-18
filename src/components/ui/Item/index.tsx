import { ItemProps, SetIconTypes } from "../../../types/NavTypes";
import { renderIcon } from "./functions";
import styles from "./styles.module.scss";

const Item = ({
    children,
    setIcon,
    href
}: ItemProps) => (
    <a
        className={styles.item}
        href={href}
    >
        <span className={styles.text}>
            {children}
        </span>

        {renderIcon(setIcon as SetIconTypes)}
    </a>
)

export default Item;