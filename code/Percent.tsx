import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function Percent(props) {
    const { percent, tint, ...rest } = props

    return (
        <Frame
            background=""
            style={{
                width: 31,
                height: 16,
                fontFamily: `"ApercuPro-Medium", "Apercu Pro", serif`,
                color: "var(--salad_green, #46c273)",
                fontSize: 16,
                letterSpacing: 0,
                lineHeight: 1,
                fontWeight: 500,
                textAlign: "right",
            }}
        >
            {percent}
        </Frame>
    )
}

Percent.defaultProps = {
    height: 128,
    width: 240,
    percent: "0%",
    tint: "#0099ff",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Percent, {
    percent: {
        title: "Percent",
        type: ControlType.String,
        defaultValue: "Hello Framer!",
    },
    tint: {
        title: "Tint",
        type: ControlType.Color,
        defaultValue: "#0099ff",
    },
})
