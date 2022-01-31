import { CSSProperties } from "react";
import { ImageProps } from "../../types";

const Image = ({ 
    src, 
    alt, 
    isBackground,
    positionElement,
    width,
    overflow
}: ImageProps) => {
    let stylesConfig: CSSProperties = {
        width
    };

    if(isBackground) {
        stylesConfig = {
            ...stylesConfig,
            ...positionElement,
            position: "absolute",
            transform: "translateY(-50%)",
            overflow
        }
    }

    return (
        <img
            style={stylesConfig}
            src={src}
            alt={alt}
        />
    )
}

export default Image;