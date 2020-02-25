import { Override, useAnimation } from "framer"

// Open Preview: Command + P

// Learn more: https://framer.com/api

export function Splash(): Override {
    const animation = useAnimation()

    return {
        animate: {
            opacity: 0,

            transition: { delay: 2, duration: 0.3, ease: "linear" },
        },
    }
}
export function logIn(): Override {
    const animation = useAnimation()

    return {
        animate: {
            zIndex: 2,
            transition: { delay: 2.4, duration: 0.3, ease: "linear" },
        },
    }
}

//    async function sequence() {
//         await animation.start({
//             opacity: 0,
//             transition: { delay: 2, duration: 0.3, ease: "linear" },
//         })
//         animation.start({
//             zIndex: -2,
//         })
//     }
