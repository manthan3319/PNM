import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'; // For animations
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slider11, sliderbg1, sliderbg10, sliderbg2, sliderbg3, sliderbg4, sliderbg5, sliderbg6, sliderbg7, sliderbg8, sliderbg9 } from '../Images/Images';

const MainSlider = () => {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    // Array to hold the images dynamically
    const images = [sliderbg1, sliderbg2, sliderbg3, sliderbg4, sliderbg5, sliderbg6, sliderbg7, sliderbg8, sliderbg9, sliderbg10, slider11];

    return (
        <div className='lg:pt-[208px] md:pt-[120px] pt-[92px] w-[85%] m-auto' ref={ref}>
            <motion.div
                className='bg-black lg:h-[680px] md:h-[400px]'
                initial={{ opacity: 0, transform: 'translateY(100px)' }}
                animate={inView ? { opacity: 1, transform: 'translateY(0)' } : {}}
                transition={{ duration: 0.5 }}
            >
                <Slider {...sliderSettings}>
                    {images.map((image, index) => (
                        <div key={index} className="text-white text-center">
                            <img src={image} className='lg:h-[680px] md:h-[400px] w-[100%]' alt={`slider image ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </motion.div>
        </div>
    );
}

export default MainSlider;
