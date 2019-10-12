import * as React from "react"
import { Override, Data, useCycle} from "framer"
// import { motion } from "framer-motion"

const data = Data({
    tapped: true,
    color: '#181818',
})

export function checkBox(): Override {
    const [currentState, cycleVariants] = useCycle("unchecked", "checked")
    return {
        variants: {
            unchecked: {
                background: "#fff",
                rotate: 0
            },
            checked: {
                background: "#181818",
                rotate: 180
            }
        },
        whileTap: {
            scale: 0.9,
            rotate: -45
        },
        animate: currentState,
        onTap() {
            cycleVariants()
            data.tapped = !data.tapped
            if(data.tapped == true) {
                data.color = '#181818'
            } else {
                data.color = '#7f7f7f'
            }
        },
     }
}

export function changeText(): Override {
    return {
        animate: {
            color: data.color
        }
    }
}

