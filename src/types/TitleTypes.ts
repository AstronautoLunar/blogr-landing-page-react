interface TitleProps {
    children: string;
    color?: ColorTypes;
    size?: SizeTypes;
}

export type ColorTypes = string | number;
export type SizeTypes = string | number;

export default TitleProps;