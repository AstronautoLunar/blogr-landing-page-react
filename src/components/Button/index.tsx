import styles from "./styles.module.scss";
import { CSSProperties } from "react";
import { ButtonProps } from "../../types";

const Button = ({ 
    children, 
    type,
    paddingStyle = undefined
}: ButtonProps) => {
    let stylesOfTypes: CSSProperties = {};

    switch(type) {
        case "CTA":
            stylesOfTypes = {
                backgroundColor: "var(--white)",
                color: "var(--light-red)",
                padding: 
                    paddingStyle 
                    ? 
                    paddingStyle 
                    : 
                    "10px 32px",
                fontWeight: "700"
            }
            break;
        case "ghost":
            stylesOfTypes = {
                backgroundColor: "transparent",
                color: "var(--white)",
                border: "1px solid var(--white)",
                padding: 
                    paddingStyle 
                    ? 
                    paddingStyle 
                    : 
                    ""
            }
            break;
        default:
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