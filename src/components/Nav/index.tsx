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
        <span className={styles.text}>
            { children }
        </span>
        
        <Arrow/>
    </a>
)

const Arrow = () => (
    <img
        className={styles.iconArrowLight}
        src={require("../../assets/icon-arrow-light.svg").default}
        alt="icon arrow light"
    />
);

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