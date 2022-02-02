import styles from "./styles.module.scss";
import { CSSProperties } from "react";
import { ButtonProps } from "../../types";

const Button = ({ 
    children, 
    isTypeContrast
}: ButtonProps) => {
    let stylesOfTypes: CSSProperties = {};

    if(isTypeContrast) {
        stylesOfTypes = {
            backgroundColor: "var(--white)",
            color: "var(--light-red)",
            padding: "10px 32px"
        }
    }

    return (
        <button 
            className={styles.button}
            style={stylesOfTypes}
        >
            { children }
        </button>
    )
}

export default Button