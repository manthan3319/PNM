import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Slider from "react-slick"; // Importing react-slick for the slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Slider CSS

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

// Sample team data (this can come from a dynamic API or database)
const teamMembers = [
    {
        name: 'John Doe',
        position: 'CEO',
        image: 'https://via.placeholder.com/150', // Replace with actual images
    },
    {
        name: 'Jane Smith',
        position: 'CTO',
        image: 'https://via.placeholder.com/150', // Replace with actual images
    },
    {
        name: 'Michael Johnson',
        position: 'Marketing Manager',
        image: 'https://via.placeholder.com/150', // Replace with actual images
    },
    {
        name: 'Emily Davis',
        position: 'Lead Developer',
        image: 'https://via.placeholder.com/150', // Replace with actual images
    },
];

// Slider settings
const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 768, // Added breakpoint for screens less than 768
            settings: {
                slidesToShow: 2, // Show 2 slides
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
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

                {/* Our Team Section */}
                {/* <div className='mt-[50px]'>
                    <div className='text-center'>
                        <h1 className='text-[45px] font-poppins font-bold border-b inline-block'>
                            Our Team
                        </h1>
                    </div>

                    <div className='mt-8 overflow-hidden'>
                        <Slider {...sliderSettings}>
                            {teamMembers.map((member, index) => (
                                <div key={index} className="text-center p-4">
                                    <div className="h-[250px] w-[250px] mx-auto rounded-full overflow-hidden shadow-lg mb-4">
                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-xl font-bold">{member.name}</h3>
                                    <p className="text-sm text-gray-600">{member.position}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div> */}
            </div>
        </motion.div>
    );
};

export default AboutUs;
