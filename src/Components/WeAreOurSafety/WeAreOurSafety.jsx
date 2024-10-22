import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';  
import { galery1, galery2, galery5, galery6 } from '../Images/Images';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const imageAnimation = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};

const WeAreOurSafety = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,  
        threshold: 0.1,
    });

    return (
        <div className='pt-[50px]' ref={ref}>
            <div className='flex  lg:flex-row overflow-hidden items-center gap-[15px] md:gap-[25px] lg:gap-0 flex-col'>
                <motion.div
                    className='lg:w-[50%] w-[100%] md:px-[50px] px-[20px]'
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}  // Animation on view
                >
                    <motion.h1 className='xl:text-[60px] lg:text-[45px] md:text-[55px] font-bold font-poppins text-[32px]' variants={textAnimation}>
                        Your Trusted Partner in <span className='span_text_blue'>Environmental</span> and <br />
                        <span className='span_text_blue'>Safety Solutions</span>
                    </motion.h1>

                    <motion.p className='mt-4 font-poppins text-[18px]' variants={textAnimation}>
                        At PNM Enviro-Safe Solutions, we specialize in providing comprehensive Environmental, Health, Industrial Safety, and Corporate Social Responsibility services, all under one roof. With our motto, "Committed for Better Solutions," we drive innovation and growth through tailored solutions that meet your unique needs.
                    </motion.p>

                    <motion.div className='lg:mt-8' variants={textAnimation}>
                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <h1 className='md:text-5xl text-[45px] font-bold text-orange'>
                                    {inView && <CountUp end={7} duration={2} />} +
                                </h1>
                                <p className='text-[18px] font-poppins'>Years of active service</p>
                            </div>
                            <div>
                                <h1 className='md:text-5xl text-[45px] font-bold text-orange'>
                                    {inView && <CountUp end={50} duration={2} />} +
                                </h1>
                                <p className='text-[18px] font-poppins'>Global Clientele</p>
                            </div>
                            <div>
                                <h1 className='md:text-5xl text-[45px] font-bold text-orange'>
                                    {inView && <CountUp end={25} duration={2} />} +
                                </h1>
                                <p className='text-[18px] font-poppins'>In-house personnel & SMEs</p>
                            </div>
                            <div>
                                <h1 className='md:text-5xl text-[45px] font-bold text-orange'>
                                    {inView && <CountUp end={45} duration={2} />} +
                                </h1>
                                <p className='text-[18px] font-poppins'>Worksites covered</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Buttons */}
                    <motion.div className='mt-8 flex flex-row space-x-4' variants={textAnimation}>
                        <Link className='lg:text-[20px] font-poppins bg-orange text-white py-[10px] px-[10px] rounded-2xl border-black border-[1px] hover:bg-light-blue hover:border-[1px] hover:border-light-blue hover:text-black'>
                            Learn More <span><i className="fa fa-angle-right" aria-hidden="true"></i></span>
                        </Link>
                        <Link to="/contact" className='lg:text-[20px] font-poppins bg-white text-black py-[10px] px-[10px] rounded-2xl border-black border-[1px] hover:bg-light-blue hover:border-[1px] hover:border-light-blue hover:text-black'>
                            Contact Us <span><i className="fa fa-angle-right" aria-hidden="true"></i></span>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right side image slider */}
                <motion.div
                    className='lg:w-[50%] w-[100%]'
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}  // Animation based on inView
                    variants={imageAnimation}
                >
                    <Slider {...sliderSettings}>
                        <div>
                            <img src={galery1} alt='Slide 1' className='w-full md:min-h-[650px] md:max-h-[650px] object-cover min-h-[300px]' />
                        </div>
                        <div>
                            <img src={galery5} alt='Slide 2' className='w-full md:min-h-[650px] md:max-h-[650px] object-cover min-h-[300px]' />
                        </div>
                        <div>
                            <img src={galery2 } alt='Slide 3' className='w-full md:min-h-[650px] md:max-h-[650px] object-cover min-h-[300px]' />
                        </div>
                    </Slider>
                </motion.div>
            </div>
        </div>
    );
};

export default WeAreOurSafety;
