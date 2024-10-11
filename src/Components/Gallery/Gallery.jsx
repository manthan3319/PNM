import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { galery1, galery2, galery3, galery4, galery5, galery6, galery7 } from '../Images/Images'; // Import your images

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);

  const galleryImages = [
    { id: 1, src: galery1, alt: 'Image 1' },
    { id: 2, src: galery2, alt: 'Image 2' },
    { id: 3, src: galery3, alt: 'Image 3' },
    { id: 4, src: galery4, alt: 'Image 4' },
    { id: 5, src: galery5, alt: 'Image 5' },
    { id: 6, src: galery6, alt: 'Image 6' },
    { id: 7, src: galery7, alt: 'Image 7' },
    { id: 8, src: galery4, alt: 'Image 8' },
    { id: 9, src: galery1, alt: 'Image 9' },
    { id: 10, src: galery5, alt: 'Image 10' },
  ];

  return (
    <div className='relative lg:max-w-[1850px] px-[20px] m-auto lg:pt-[40px]'>
      <div className='lg:pt-[150px] md:pt-[200px] pt-[290px]'>
        <div className='py-[20px]'>
          <div className='text-center mb-[25px]'>
            <h1 className='text-[45px] font-poppins font-bold text-orange border-b-[1px] inline-block'>GALLERY</h1>
          </div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-[20px]"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } }, // Delay between children
            }}
          >
            {galleryImages.map((image, index) => (
              <motion.div 
                key={image.id} 
                className="overflow-hidden"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 }, 
                }}
                transition={{ duration: 0.5 }} 
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="min-h-[200px] rounded-[10px] max-h-[200px] w-full object-cover hover:scale-110 transition-transform duration-300" 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;