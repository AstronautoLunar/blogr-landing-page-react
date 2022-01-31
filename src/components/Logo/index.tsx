import { LogoProps } from "../../types";

const Logo = ({ src, alt }: LogoProps) => (
    <img
        src={src}
        alt={alt}
    />
)

export default Logo;