"use client"

import { useState } from "react"
import cx from "classnames"

import styles from "@/styles/components/Carousel.module.scss"

interface CarouselImage {
  src: string
  alt?: string
}

const Carousel = ({ images }: { images: CarouselImage[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const increaseCurrentImageIndex = () => {
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0)
    } else {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  const decreaseCurrentImageIndex = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1)
    } else {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  return (
    <div className={styles.carousel}>
      <svg className={cx(styles.arrow, styles.arrow__left)}
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 64 64"
        onClick={decreaseCurrentImageIndex}
        >
        <g>
          <polyline
            fill="none"
            stroke="#212121"
            strokeWidth="1"
            strokeLinejoin="bevel"
            strokeMiterlimit="10"
            points="37,15 20,32 37,49"
          />
        </g>
      </svg>
      {images.map((image, index) => (
        image && index === currentImageIndex ?
        <img
          className={styles.image}
          key={index}
          src={image.src}
          alt={image.alt || ""}
          style={{ objectFit: "contain" }}
        /> :
        null
      ))}
      <svg className={cx(styles.arrow, styles.arrow__right)}
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 64 64"
        onClick={increaseCurrentImageIndex}
        >
        <g>
          <polyline
            fill="none"
            stroke="#212121"
            strokeWidth="1"
            strokeLinejoin="bevel"
            strokeMiterlimit="10"
            points="27,15 44,32 27,49"
          />
        </g>
      </svg>
    </div>
  )
}

export default Carousel
