import styles from "./styles.module.scss";
import { LogoProps } from "../../types";

const Logo = ({ 
    src, 
    alt 
}: LogoProps) => (
    <img
        className={styles.logo}
        src={src}
        alt={alt}
    />
)

export default Logo;