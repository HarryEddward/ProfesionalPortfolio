import * as motion from "motion/react-client"
import type React from "react"
import "./style.css"

type ImageItem = {
  id: string
  image: string
}
type Images = ImageItem[]

interface IInfiniteHorizontalSlider {
  images: Images
  speed?: number
}

// Declaramos el tipo para las propiedades CSS personalizadas
type SliderStyle = React.CSSProperties & {
  "--speed": string
}

export default function InfiniteHorizontalSlider({ images, speed = 1000 }: IInfiniteHorizontalSlider) {
  return (
    <div className="inner">
      <div className="wrapper">
        <section style={{ "--speed": `${speed}ms` } as SliderStyle}>
          {images.map(({ id, image }) => (
            <motion.div
            initial={{
              scale: 1,
              rotate: 0
            }}
            animate={{
              scale: 1,
              rotate: 0
            }}
            whileHover={{
              scale: 1.1,
              rotate: 10
            }}
            className="image" key={id}>
              <img src={image || "/placeholder.svg"} alt={id} />
            </motion.div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` } as SliderStyle}>
          {images.map(({ id, image }) => (
            <motion.div
            initial={{
              scale: 1,
              rotate: 0
            }}
            animate={{
              scale: 1,
              rotate: 0
            }}
            whileHover={{
              scale: 1.1,
              rotate: 10
            }} className="image" key={id}>
              <img src={image || "/placeholder.svg"} alt={id} />
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  )
}

