import * as React from "react"

import { Override, transform, Data, useTransform } from "framer"
//as each food card is interacted with, the progress bar needs to increase.
//there is 10 cards which need to increase the progress bar from 0 to 280
const data = Data({
    width: 0,
    percent: "0%",
    next: false,
})
const variants = {
    show: {
        x: -375,
        transition: {
            delay: 3,
            ease: "linear",
            duration: 0.3,
        },
    },
    next: {
        x: 0,
        transition: {
            ease: "linear",
        },
    },
}
const variantsLocation = {
    show: {
        x: -375,
        transition: {
            delay: 3,
            ease: "linear",
            duration: 0.3,
        },
    },
    next: {
        x: 0,
        transition: {
            ease: "linear",
        },
    },
}
const varAnim = {
    show: {
        opacity: 1,
        transition: {
            ease: "linear",
            duration: 0.1,
        },
    },
    next: {
        opacity: 0,
    },
}
// const [screenStart, setScreenStart] = React.useState(0)
export function DragAdd(): Override {
    return {
        drag: "x",
        onDragEnd() {
            if (data.width == 280) {
            } else {
                data.width = data.width + 28
                data.percent = transform(data.width, [0, 280], [0, 100]) + "%"
            }
        },
    }
}
export function DragLast(): Override {
    return {
        drag: "x",

        onDragEnd() {
            if (data.width == 280) {
                data.next = true
            } else {
                data.width = data.width + 28
                data.percent = transform(data.width, [0, 280], [0, 100]) + "%"
                data.next = true
            }
        },
    }
}
export function last(): Override {
    return {
        animate: data.next ? "show" : "next",

        variants: variants,
    }
}
export function showAnim(): Override {
    return {
        animate: data.next ? "show" : "next",

        variants: varAnim,
    }
}
export function locationScreen(): Override {
    return {
        animate: data.next ? "show" : "next",

        variants: variantsLocation,
    }
}
export function progress(): Override {
    return {
        animate: { width: data.width },
    }
}

export function percent(): Override {
    return {
        percent: data.percent,
    }
}

// if (Math.abs(info.point.x) < 120) {
//     animationControls.start({
//         x: 0,
//         transition: { duration: 0.3 },
//     })
// } else {
//     data.width = data.width + 28
//     console.log(data.percent)
//     setWidth(transform(data.width, [0, 280], [0, 100]))
//     progAnim.start({
//         width: data.width,
//     })

//     animationControls.start({
//         x: info.point.x < 0 ? -400 : 400,
//         transition: { duration: 0.4 },
//     })
