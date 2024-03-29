import * as React from "react"
import { Override, Data, BackgroundImage } from "framer"

// Learn more: https://framer.com/docs/overrides/

const appState = Data({
    taps: 0,
    backgroundColor: '#181818'
})

export function TapFrame(props): Override {
    return {
        borderRadius: 3,
        whileTap: {
            scale: 0.9,
            borderRadius: 12,
            rotate: 180
        },
        onTap: () => {
            appState.taps += 1
        },
    }
}

export function RotateFrame(props): Override {
    return {
        animate: {
            rotate: appState.taps * 90,
        },
    }
}

export function TextElement(props): Override {
    return {
        text: appState.taps,
    }
}
