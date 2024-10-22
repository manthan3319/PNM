import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'; // For animations
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderbg1, sliderbg2, sliderbg3, sliderbg4, sliderbg5, sliderbg6, sliderbg7, sliderbg8 } from '../Images/Images';

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

    return (
        <div className='lg:pt-[208px] md:pt-[120px] pt-[92px] w-[85%] m-auto' ref={ref}>
            <motion.div
                className='bg-black lg:h-[680px] md:h-[400px]'
                initial={{ opacity: 0, transform: 'translateY(100px)' }}
                animate={inView ? { opacity: 1, transform: 'translateY(0)' } : {}}
                transition={{ duration: 0.5 }}
            >
                <Slider {...sliderSettings}>
                    <div className="text-white text-center">
                        <img src={sliderbg3} className='lg:h-[680px] md:h-[400px] w-[100%]' alt='slider images' />
                    </div>
                    <div className="text-white text-center"  >
                        <img src={sliderbg1} className='lg:h-[680px] md:h-[400px] w-[100%]' alt='slider images' />
                    </div>
                    <div className="text-white text-center">
                        <img src={sliderbg2} className='lg:h-[680px] md:h-[400px] w-[100%]' alt='slider images' />
                    </div>
                    <div className="text-white text-center ">
                        <img src={sliderbg4} className='lg:h-[680px] md:h-[400px] w-[100%]' alt='slider images' />
                    </div>
                    <div className="text-white text-center ">
                        <img src={sliderbg5} className='lg:h-[680px] md:h-[400px] w-[100%]' alt='slider images' />
                    </div>
                    <div className="text-white text-center ">
                        <img src={sliderbg6} className='lg:h-[680px] md:h-[400px]  w-[100%]' alt='slider images' />
                    </div>
                    <div className="text-white text-center ">
                        <img src={sliderbg7} className='lg:h-[680px] md:h-[400px] w-[100%]' alt='slider images' />
                    </div>
                    <div className="text-white text-center ">
                        <img src={sliderbg8} className='lg:h-[680px] md:h-[400px] w-[100%]' alt='slider images' />
                    </div>
                </Slider>
            </motion.div>
        </div>
    );
}

export default MainSlider;
