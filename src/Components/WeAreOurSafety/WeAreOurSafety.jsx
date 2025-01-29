import React from "react"
import { motion } from "framer-motion"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import { galery1, galery2, galery5, galery6, semminar1, semminar3, semminar4 } from "../Images/Images"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./style.css"
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const textAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

const imageAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
}

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  arrows: false,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
}

const WeAreOurSafety = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <div className="py-8 md:py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden pt-80" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div
            className="w-full lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight"
              variants={textAnimation}
            >
              Your Trusted Partner in <span className="text-blue-600">Environmental</span> and{" "}
              <span className="text-blue-600">Safety Solutions</span>
            </motion.h1>

            <motion.p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8" variants={textAnimation}>
              At PNM Enviro-Safe Solutions, we specialize in providing comprehensive Environmental, Health, Industrial
              Safety, and Corporate Social Responsibility services, all under one roof. With our motto, "Committed for
              Better Solutions," we drive innovation and growth through tailored solutions that meet your unique needs.
            </motion.p>

            <motion.div className="grid grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12" variants={textAnimation}>
              {[
                { value: 7, label: "Years of active service" },
                { value: 50, label: "Global Clientele" },
                { value: 25, label: "In-house personnel & SMEs" },
                { value: 45, label: "Worksites covered" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500 mb-1 md:mb-2">
                    {inView && <CountUp end={item.value} duration={2} />}+
                  </h2>
                  <p className="text-sm md:text-base text-gray-600">{item.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div className="text-center lg:text-left" variants={textAnimation}>
              <Link
                to="/contact"
                className="bg-zinc-900 px-6 py-3 text-white rounded-lg text-base md:text-lg inline-block hover:bg-zinc-800 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 mt-8 lg:mt-0"
            variants={imageAnimation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Slider {...sliderSettings} className="slider-container">
              {[semminar1, semminar3, semminar4, galery1, galery5, galery2].map((img, index) => (
                <div key={index} className="outline-none px-2">
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default WeAreOurSafety

