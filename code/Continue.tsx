import { Override, Data, useCycle } from "framer"

const data = Data({ mode: "signIn" })

export function keyboardSet(): Override {
    return {
        animate: data.mode,

        variants: {
            signIn: {},
            continueOn: {},
        },
        onTap: function() {
            data.mode = "continueOn"
            console.log("tapped")
        },
    }
}

export function signIn(): Override {
    return {
        animate: data.mode,
        variants: {
            signIn: { opacity: 1 },
            continueOn: {
                opacity: 0,
                transition: {
                    ease: "easeInOut",
                    duration: 0.24,
                },
            },
        },
    }
}

export function continueOn(): Override {
    return {
        opacity: 0,
        animate: data.mode,
        variants: {
            signIn: { opacity: 0 },
            continueOn: {
                opacity: 1,
                transition: {
                    ease: "easeInOut",
                    duration: 0.24,
                },
            },
        },
    }
}
