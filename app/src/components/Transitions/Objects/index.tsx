import React from 'react'
import * as motion from "motion/react-client"

type IDirectionAnimation = 'left' | 'right' | 'up' | 'down'

interface Props
{
    directionAnimation: IDirectionAnimation,
    children?: React.ReactNode
}

const defaultTransition: object = { type: "spring", stiffness: 30, damping: 20 }

const ObjectTransitionsDirectionsAnimations: object = {
    left: {
        x: [-100, 0],
        transition: defaultTransition
    },
    right: {
        x: [100, 0],
        transition: defaultTransition
    },
    up: {
        y: [-100, 0],
        transition: defaultTransition
    },
    down: {
        y: [100, 0],
        transition: defaultTransition
    }
}

export default function ObjectTransition({
    directionAnimation,
    children
}: Props) {
  return (
    <motion.div
    className='w-full h-full'
    >
        {children}
    </motion.div>
  )
}
