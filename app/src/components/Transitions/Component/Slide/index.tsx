import React from 'react'
import * as motion from "motion/react-client"

type IDirectionAnimation = 'left' | 'right' | 'up' | 'down'

interface Props
{
    directionAnimation: IDirectionAnimation;
    durationAnimation?: number;
    delayAnimation?: number;
    children?: React.ReactNode;
}

const ObjectTransitionsDirectionsAnimations = {
    left: {
        initial: {
            translateX: "-100%",
        },
        animate: {
            translateX: ["-100%", "0%"],
        }
        
    },
    right: {
        initial: {
            translateX: "100%",
        },
        animate: {
            translateX: ["100%", "0%"],
        }
    },
    up: {
        initial: {
            translateY: "-100%",
        },
        animate: {
            translateY: ["-100%", "0%"],
        }
    },
    down: {
        initial: {
            translateY: "100%",
        },
        animate: {
            translateY: ["100%", "0%"],
        }
    }
};

export default function ComponentSlideTransition({
    directionAnimation,
    durationAnimation,
    delayAnimation,
    children
}: Props) {

    const defaultTransition = {
        type: "spring",
        stiffness: 30,
        damping: 20,
        duration: durationAnimation || 1,
        delay: delayAnimation || 0
    };


    return (
        <motion.div
        className=''
        initial={ObjectTransitionsDirectionsAnimations[directionAnimation].initial}
        animate={ObjectTransitionsDirectionsAnimations[directionAnimation].animate}
        transition={defaultTransition}
        >
            {children}
        </motion.div>
    )
}
