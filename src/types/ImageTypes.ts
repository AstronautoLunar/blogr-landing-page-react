import { CSSProperties } from "react";

interface ImageProps {
    src: string;
    alt: string;
    isBackground: boolean;
    positionElement: PositionElementImage;
    width?: string;
    overflow?: CSSProperties["overflow"];
    zIndex?: CSSProperties["zIndex"];
}

type PositionElementImage = {
    top: string | number;
    bottom: string | number;
    left: string | number;
    right: string | number;
}

export type {
    ImageProps
};