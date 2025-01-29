import React from "react"
import EnhancedCarousel from "../EnhancedCarousel"
import {
  slider11,
  sliderbg1,
  sliderbg10,
  sliderbg2,
  sliderbg3,
  sliderbg4,
  sliderbg5,
  sliderbg6,
  sliderbg7,
  sliderbg8,
  sliderbg9,
} from "../Images/Images"

const MainSlider = () => {
  const images = [
    { src: sliderbg1, alt: "Slider image 1", caption: "Welcome to our amazing world" },
    { src: sliderbg2, alt: "Slider image 2", caption: "Discover new horizons" },
    { src: sliderbg3, alt: "Slider image 3", caption: "Experience the extraordinary" },
    { src: sliderbg4, alt: "Slider image 4", caption: "Unleash your imagination" },
    { src: sliderbg5, alt: "Slider image 5", caption: "Embrace the journey" },
    { src: sliderbg6, alt: "Slider image 6", caption: "Create unforgettable memories" },
    { src: sliderbg7, alt: "Slider image 7", caption: "Explore the unknown" },
    { src: sliderbg8, alt: "Slider image 8", caption: "Push your boundaries" },
    { src: sliderbg9, alt: "Slider image 9", caption: "Live your dreams" },
    { src: sliderbg10, alt: "Slider image 10", caption: "Reach for the stars" },
    { src: slider11, alt: "Slider image 11", caption: "Make every moment count" },
  ]

  return (
    <div className="w-full">
      <EnhancedCarousel images={images} />
    </div>
  )
}

export default MainSlider

