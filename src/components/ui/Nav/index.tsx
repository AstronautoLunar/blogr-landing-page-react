import styles from "./styles.module.scss";
import { NavProps } from "../../../types/NavTypes";

const Nav = ({
    data,
    renderItems
}: NavProps) => {

    return (
        <nav id={styles.nav}>
            {
                data.map(renderItems)
            }
        </nav>
    )
}

/**
 * ({
                    id,
                    text
                }) => (
                    <Item key={id}>
                        {text}
                    </Item>
                )
 */

export default Nav;