import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { PlayCircle } from "lucide-react"
import { sliderbg1 } from "../Images/Images"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const teamMembers = [
  { name: "John Doe", position: "CEO", image: "https://via.placeholder.com/150" },
  { name: "Jane Smith", position: "CTO", image: "https://via.placeholder.com/150" },
  { name: "Michael Johnson", position: "Marketing Manager", image: "https://via.placeholder.com/150" },
  { name: "Emily Davis", position: "Lead Developer", image: "https://via.placeholder.com/150" },
]

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
}

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-b from-amber-50 to-white py-16 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
             <img src={sliderbg1} alt="img" className="h-full w-full" />
            </div>
          </motion.div>

          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-orange-500 inline-block">
              About Us
            </h2>
            <ul className="space-y-4 text-gray-600">
              {[
                "PNM Enviro-Safe Solutions provides a full range of Environmental, Health, and Industrial Safety services, as well as Corporate and Environmental Social Responsibility solutions.",
                <>
                  Our motto: <strong className="text-orange-500">"Committed for Better Solutions"</strong>
                </>,
                "We foster exponential growth through innovative ideas and practical solutions.",
                "As an independent company, we deliver high-quality technical services, ensuring confidentiality, accuracy, and timely results at reasonable costs.",
              ].map((item, index) => (
                <motion.li key={index} variants={itemVariants} className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 space-y-6">
              {[
                {
                  title: "Vision",
                  content:
                    "To achieve leadership by providing scientifically accurate and practically possible services.",
                },
                {
                  title: "Mission",
                  content:
                    "To deliver exceptional services with quality results on schedule, ensuring both growth and professional satisfaction.",
                },
                {
                  title: "Values",
                  content:
                    "Customer satisfaction, honesty, confidentiality, and staying up-to-date with the latest regulations and technologies.",
                },
              ].map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </motion.div>
              ))}
            </div>

            <motion.div className="mt-8" variants={itemVariants}>
              <Link
                to="/about"
                className="inline-block bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
              >
                GET TO KNOW US
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* <motion.div className="mt-20" variants={itemVariants}>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 pb-2 border-b-2 border-orange-500 inline-block">
            Our Team
          </h2>
          <Slider {...sliderSettings} className="team-slider">
            {teamMembers.map((member, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                    <p className="text-gray-600">{member.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div> */}
      </div>
    </motion.div>
  )
}

export default AboutUs

