import { Override, Data, useCycle } from "framer"
import { colors } from "./canvas"

const data = Data({ mode: "disable" })
const disableColor = "#FFD4C2"
const ableColor = colors.primary
console.log(colors.primary)
export function lastField(): Override {
    return {
        animate: data.mode,

        variants: {
            disable: {},
            able: {},
        },
        onTap: function() {
            data.mode = "able"
            console.log("tapped")
        },
    }
}

export function next(): Override {
    return {
        animate: data.mode,
        variants: {
            disable: { background: disableColor },
            able: {
                background: ableColor,
            },
        },
    }
}
