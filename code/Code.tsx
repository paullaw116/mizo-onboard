import { Override, useAnimation, Data } from "framer"

export function Code(): Override {
    const animation = useAnimation()

    return {
        animate: {
            opacity: 1,
            transition: { delay: 1, duration: 0.16, ease: "linear" },
        },
    }
}

export function Loading(): Override {
    const animation = useAnimation()

    return {
        animate: {
            x: -375,
            transition: { delay: 2, duration: 0.24, ease: "linear" },
        },
    }
}
