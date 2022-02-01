import styles from "./styles.module.scss";
import { 
    NavProps, 
    ItemProps
} from "../../types/NavTypes";

const Item = ({ 
    children 
}: ItemProps) => (
    <a 
        className={styles.item}
    >
        { children }
    </a>
)

const Nav = ({ data }: NavProps) => {

    return (
        <nav id={styles.nav}>
            {
                data.map(({ 
                    id,
                    text
                }) => (
                    <Item key={id}>
                        { text }
                    </Item>
                ))
            }
        </nav>
    )
}

export default Nav;