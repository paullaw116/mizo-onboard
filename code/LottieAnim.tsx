import * as React from "react"
import Lottie from "react-lottie"
import * as animationData from "./lottie.json"

export function LottieAnim() {
    return (
        <Lottie
            options={{
                loop: true,
                autoplay: true,

                animationData: animationData,
            }}
            size="100%"
        />
    )
}
