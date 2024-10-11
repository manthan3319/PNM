import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blog1, blog2, blog3, blog4, blog5 } from '../Images/Images';
import { motion } from 'framer-motion'; 

// Sample blog data
const blogData = [
  {
    id: 1,
    title: 'Safety Induction Training: Empower Your Skills',
    content: 'Safety Induction Training: Empower Your Skills Table of Contents  Introduction Importance of Safety Induction Training Key Elements of Safety...',
    image: blog1,
    socialLinks: [
      { platform: 'instagram', icon: 'fa fa-instagram' },
      { platform: 'youtube', icon: 'fa fa-youtube-play' },
      { platform: 'linkedin', icon: 'fa fa-linkedin-square' },
      { platform: 'telegram', icon: 'fa fa-telegram' },
    ],
  },
  {
    id: 2,
    title: 'Creating Opportunities in Safety: How Core EHS Can',
    content: 'Creating Opportunities in Safety: How Core EHS Can Elevate Your Career with Government-Certified Training & RPL Programs  In today’s...',
    image: blog2,
    socialLinks: [
      { platform: 'instagram', icon: 'fa fa-instagram' },
      { platform: 'youtube', icon: 'fa fa-youtube-play' },
      { platform: 'linkedin', icon: 'fa fa-linkedin-square' },
      { platform: 'telegram', icon: 'fa fa-telegram' },
    ],
  },
  {
    id: 3,
    title: 'Why Industry Expertise Matters in Choosing EHS Software ',
    content: 'Why Industry Expertise Matters in Choosing EHS Software  In this blog, we discuss why choosing an EHS software provider with industry expertise is crucial for…',
    image: blog3,
    socialLinks: [
      { platform: 'instagram', icon: 'fa fa-instagram' },
      { platform: 'youtube', icon: 'fa fa-youtube-play' },
      { platform: 'linkedin', icon: 'fa fa-linkedin-square' },
      { platform: 'telegram', icon: 'fa fa-telegram' },
    ],
  },
  {
    id: 4,
    title: 'Understanding the Main Causes of Industrial Accidents',
    content: 'Understanding the Main Causes of Industrial Accidents Imagine starting your workday at a factory where a minor issue, such as a loose bolt on your…',
    image: blog4,
    socialLinks: [
      { platform: 'instagram', icon: 'fa fa-instagram' },
      { platform: 'youtube', icon: 'fa fa-youtube-play' },
      { platform: 'linkedin', icon: 'fa fa-linkedin-square' },
      { platform: 'telegram', icon: 'fa fa-telegram' },
    ],
  },
  {
    id: 5,
    title: 'Understanding the Main Causes of Industrial Accidents',
    content: 'Understanding the Main Causes of Industrial Accidents Imagine starting your workday at a factory where a minor issue, such as a loose bolt on your…',
    image: blog5,
    socialLinks: [
      { platform: 'instagram', icon: 'fa fa-instagram' },
      { platform: 'youtube', icon: 'fa fa-youtube-play' },
      { platform: 'linkedin', icon: 'fa fa-linkedin-square' },
      { platform: 'telegram', icon: 'fa fa-telegram' },
    ],
  },
];

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className='relative lg:max-w-[1850px] px-[20px] m-auto lg:pt-[40px]'>
      <div className='lg:pt-[150px] md:pt-[200px] pt-[290px]'>
        <div className='py-[20px]'>
          <div className='text-center mb-[25px]'>
            <h1 className='text-[45px] font-poppins font-bold text-orange border-b-[1px] inline-block'>Blogs</h1>
          </div>

          <motion.div 
            className='grid 2xl:grid-cols-5 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[15px]'
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }, // Delay between cards
            }}
          >
            {blogData.map((blog, index) => (
              <motion.div
                key={blog.id}
                className='border-[1px] border-black rounded-[10px]'
                variants={{
                  hidden: { opacity: 0, x: -100 }, // Start offscreen left
                  visible: { opacity: 1, x: 0 },  // Animate to final position
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered effect
              >
                <div className='bg-slate-600 h-[200px] rounded-[10px]'>
                  <img src={blog.image} alt={blog.title} className='min-h-[200px] rounded-t-[10px]' />
                </div>
                <div className='p-[10px]'>
                  <div>
                    <h1 className='font-poppins font-bold text-[20px]'>{blog.title}</h1>
                    <p className='mt-[10px] font-roboto'>{blog.content}</p>
                  </div>

                  <div className='flex justify-end gap-[10px]'>
                    {blog.socialLinks.map((link, index) => (
                      <Link key={index} className='inline-block text-[25px]'>
                        <i className={link.icon} aria-hidden="true"></i>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
