import { Image } from "../ui";

const BackgroundPatternIntro = () => (
    <Image
        src={require("../../assets/bg-pattern-intro-desktop.svg").default}
        alt="background image illustration"
        isBackground={true}
        positionElement={{
            right: "-800px",
            top: "40%",
            bottom: "none",
            left: "none"
        }}
        width="2500px"
        zIndex="-1"
    />
)

export default BackgroundPatternIntro;