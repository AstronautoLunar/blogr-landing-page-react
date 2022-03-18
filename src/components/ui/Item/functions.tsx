import { SetIconTypes } from "../../../types";
import ArrowIcon from "../ArrowIcon";

export function renderIcon(setIcon: SetIconTypes) {
    return (
        setIcon 
        ?
        setIcon()
        :
        <ArrowIcon/>
    )
}