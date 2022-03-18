import styles from "./styles.module.scss";

import { 
    TitleProps, 
    ColorTypes,
    SizeTypes
} from "../../../types";

function applyColorTitle(color: ColorTypes | undefined): string {
    if(typeof color === "string") {
        return color;
    } else if(typeof color === "number") {
        return `#${color}`;
    } else {
        return "#ffffff"
    }
}

function applySizeTitle(size: SizeTypes | undefined): string {
    if(typeof size === "string") {
        return size;

    } else if(typeof size === "number") {
        return `${size}rem`;
    
    } else {
        return `24px`;

    }
}

const Title = ({ 
    children,
    color,
    size
}: TitleProps) => (
    <h1 
        className={styles.Title}
        style={{
            color: applyColorTitle(color),
            fontSize: applySizeTitle(size)
        }}
    >
        { children }
    </h1>
)

export default Title;