import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

// Variants for animations
const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: 'easeInOut',
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
};

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
        },
    },
};

const AboutUs = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div 
            className='bg-[#faebd76e]' 
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
        >
            <div className="lg:max-w-[1850px] m-auto py-16 px-[20px] lg:mt-[50px]">
                <div className="flex flex-col lg:flex-row gap-[25px]">
                    
                    {/* Video Section */}
                    <motion.div 
                        className="lg:w-[50%] flex justify-center" 
                        variants={textVariants}
                    >
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/your-video-id"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                        ></iframe>
                    </motion.div>

                    {/* Text Section */}
                    <motion.div 
                        className="lg:w-[50%]" 
                        variants={textVariants}
                    >
                        <h2 className="lg:text-[45px] font-poppins font-bold mb-4 text-light-blue border-b-[2px] border-orange inline-block text-[35px]">
                            About Us
                        </h2>
                        <ul className="list-disc pl-4 space-y-4 text-lg">
                            <motion.li className='text-[18px] font-poppins' variants={textVariants}>
                                PNM Enviro-Safe Solutions provides a full range of Environmental, Health, and Industrial Safety services, as well as Corporate and Environmental Social Responsibility solutions.
                            </motion.li>
                            <motion.li className='text-[18px] font-poppins' variants={textVariants}>
                                Our motto: <strong>"Committed for Better Solutions"</strong>, embodies the spirit of our organization.
                            </motion.li>
                            <motion.li className='text-[18px] font-poppins' variants={textVariants}>
                                We foster exponential growth through innovative ideas and practical solutions.
                            </motion.li>
                            <motion.li className='text-[18px] font-poppins' variants={textVariants}>
                                As an independent company, we deliver high-quality technical services, ensuring confidentiality, accuracy, and timely results at reasonable costs.
                            </motion.li>
                        </ul>

                        {/* Vision Section */}
                        <motion.h3 
                            className="text-2xl font-semibold mt-6 text-light-blue font-poppins" 
                            variants={textVariants}
                        >
                            Vision
                        </motion.h3>
                        <motion.p 
                            className="text-[18px] mt-2 font-poppins" 
                            variants={textVariants}
                        >
                            To achieve leadership by providing scientifically accurate and practically possible services.
                        </motion.p>

                        {/* Mission Section */}
                        <motion.h3 
                            className="text-2xl font-semibold mt-6 text-light-blue font-poppins" 
                            variants={textVariants}
                        >
                            Mission
                        </motion.h3>
                        <motion.p 
                            className="text-[18px] mt-2 font-poppins" 
                            variants={textVariants}
                        >
                            To deliver exceptional services with quality results on schedule, ensuring both growth and professional satisfaction.
                        </motion.p>

                        {/* Values Section */}
                        <motion.h3 
                            className="text-2xl font-semibold mt-6 text-light-blue font-poppins" 
                            variants={textVariants}
                        >
                            Values
                        </motion.h3>
                        <motion.ul 
                            className="list-disc pl-4 space-y-4 text-lg" 
                            variants={containerVariants}
                        >
                            <motion.li className='text-[18px] font-poppins' variants={textVariants}>
                                Customer satisfaction is at the core of our principles.
                            </motion.li>
                            <motion.li className='text-[18px] font-poppins' variants={textVariants}>
                                Honesty and confidentiality are our guiding ethics.
                            </motion.li>
                            <motion.li className='text-[18px] font-poppins' variants={textVariants}>
                                We stay up-to-date with the latest regulations and technologies to offer the best possible solutions.
                            </motion.li>
                        </motion.ul>

                        {/* Button */}
                        <motion.div 
                            className='mt-[20px]' 
                            variants={textVariants}
                        >
                            <Link 
                                className='font-poppins text-[20px] bg-orange text-white py-[15px] px-[20px] inline-block rounded-lg'
                            >
                                GET TO KNOW US
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutUs;
