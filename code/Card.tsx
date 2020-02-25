import * as React from "react"
import {
    Frame,
    addPropertyControls,
    ControlType,
    motionValue,
    useAnimation,
    useTransform,
    useMotionValue,
    Stack,
    Data,
    transform,
} from "framer"
import { SwipeCard, colors, Gradient } from "./canvas"
import { Percent } from "./Percent"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function Card(props) {
    const { text, image, ...rest } = props
    const data = Data({
        width: 0,
        percent: "0%",
    })
    let mv = useMotionValue(0)
    let animationControls = useAnimation()
    let progAnim = useAnimation()
    let rotateMv = useTransform(mv, [-200, 200], [-50, 50])
    let opacityMv = useTransform(mv, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0])
    const style = {
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundColor: props.color,
        //boxShadow: "2px 2px 10px 0 rgba(0,0,0,0.25)",
        borderRadius: 6,
        height: 392,
        width: 327,
        overflow: "hidden",
    }
    const gradStyle = {
        fontWeight: 700,
        fontFamily: "Apercu Mono Pro",
        color: "white",
        fontSize: 24,
        justifyContent: "left",
        zIndex: 30,
        // textAlign: "left",
    }
    const [widthStart, setWidth] = React.useState(0)

    return (
        <Frame
            background={{ src: props.image }}
            // background="white"
            style={style}
            height={392}
            width={327}
            borderRadius={6}
            center
            drag="x"
            x={mv}
            animate={animationControls}
            opacity={opacityMv}
            rotate={rotateMv}
            dragConstraints={{ left: -200, right: 200 }}
            onDragEnd={function CardEnd(_, info) {
                if (Math.abs(info.point.x) < 120) {
                    animationControls.start({
                        x: 0,
                        transition: { duration: 0.3 },
                    })
                } else {
                    animationControls.start({
                        x: info.point.x < 0 ? -400 : 400,
                        transition: { duration: 0.4 },
                    })
                }
            }}
        >
            <Frame background="" bottom={0} width="100%" height={120}>
                <Frame
                    background=""
                    width={295}
                    bottom={24}
                    left={16}
                    height="auto"
                    style={gradStyle}
                >
                    {text}
                </Frame>
                <Gradient width="100%"></Gradient>{" "}
            </Frame>
        </Frame>
    )
}

Card.defaultProps = {
    height: 128,
    width: 240,
    text: "yumm",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Card, {
    image: {
        type: ControlType.Image,
    },
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "hi",
    },
})
