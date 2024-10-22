import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ContactUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top
      }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to an API.
        console.log('Form submitted:', formData);
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div 
            className='relative lg:max-w-[1850px] px-[20px] m-auto lg:pt-[40px]'
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
        >
            <div className='lg:pt-[220px] md:pt-[120px] pt-[92px]'>
                <div className='py-[20px]'>
                    <div className='text-center mb-[25px]'>
                        <h1 className='text-[45px] font-poppins font-bold text-orange border-b-[1px] inline-block'>Contact Us</h1>
                    </div>

                    <div className='xl:w-[60%] w-[100%] m-auto'>
                        <motion.div 
                            className='grid md:grid-cols-3 md:gap-[25px] gap-[15px] sm:grid-cols-1 grid-cols-1 items-center'
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, staggerChildren: 0.2 }}
                        >
                            <motion.div className='text-center bg-white border-[2px] border-custome px-[15px] py-[25px] rounded-xl contact_Card_shadow'>
                                <span className='text-[35px]'><i className="fa fa-phone" aria-hidden="true"></i></span>
                                <p className='text-[20px] font-bold font-poppins'>+91 63528 45642</p>
                            </motion.div>

                            <motion.div className='text-center bg-white border-[2px] border-custome px-[15px] py-[25px] rounded-xl contact_Card_shadow'>
                                <span className='text-[35px]'><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                                <p className='text-[20px] font-bold font-poppins'>info@pnmess.in</p>
                            </motion.div>

                            <motion.div className='text-center bg-white border-[2px] border-custome px-[15px] py-[25px] rounded-xl contact_Card_shadow'>
                                <p className='text-[20px] font-bold font-poppins'>Social Media</p>
                                <div className='flex gap-[10px] justify-center'>
                                    <Link className='text-[30px] text-orange'><i className="fa fa-linkedin-square" aria-hidden="true"></i></Link>
                                    <Link className='text-[30px] text-orange'><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                                    <Link className='text-[30px] text-orange'><i className="fa fa-youtube-play" aria-hidden="true"></i></Link>
                                    <Link className='text-[30px] text-orange'><i className="fa fa-facebook-official" aria-hidden="true"></i></Link>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            className='mt-[80px] bg-custome p-[30px] rounded-lg'
                            variants={formVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className='text-[30px] font-poppins font-bold text-black text-center mb-[20px]'>Inquiry Form</h2>
                            <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
                                <motion.input 
                                    type='text' 
                                    name='name' 
                                    placeholder='Your Name' 
                                    value={formData.name} 
                                    onChange={handleChange}
                                    className='border rounded-lg p-2 outline-none focus:scale-105 transition-transform duration-200'
                                    required
                                />
                                <motion.input 
                                    type='email' 
                                    name='email' 
                                    placeholder='Your Email' 
                                    value={formData.email} 
                                    onChange={handleChange}
                                    className='border rounded-lg p-2 outline-none focus:scale-105 transition-transform duration-200'
                                    required
                                />
                                <motion.input 
                                    type='text' 
                                    name='subject' 
                                    placeholder='Your Subject' 
                                    value={formData.subject} 
                                    onChange={handleChange}
                                    className='border rounded-lg p-2 outline-none focus:scale-105 transition-transform duration-200'
                                    required
                                />
                                <motion.textarea 
                                    name='message' 
                                    placeholder='Your Message' 
                                    value={formData.message} 
                                    onChange={handleChange}
                                    className='border rounded-lg p-2 h-[100px] outline-none focus:scale-105 transition-transform duration-200'
                                    required
                                />
                                <motion.button 
                                    type='submit' 
                                    className='bg-orange text-white font-poppins font-semibold py-[10px] rounded-lg hover:bg-orange-dark transition duration-300'
                                >
                                    Submit
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ContactUs;
