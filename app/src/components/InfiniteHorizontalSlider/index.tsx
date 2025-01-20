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
            <div className="image" key={id}>
              <img src={image || "/placeholder.svg"} alt={id} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` } as SliderStyle}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img src={image || "/placeholder.svg"} alt={id} />
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

