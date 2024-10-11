import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { logo } from '../Images/Images';

const clientLogos = [
  { id: 1, src: logo, alt: 'Client 1' },
  { id: 2, src: logo, alt: 'Client 2' },
  { id: 3, src: logo, alt: 'Client 3' },
  { id: 4, src: logo, alt: 'Client 4' },
  { id: 4, src: logo, alt: 'Client 4' },
  { id: 4, src: logo, alt: 'Client 4' },
  // Add more logos as needed
];

const OurClint = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust this for your autoplay speed
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative lg:max-w-[1850px] px-[20px] m-auto lg:mt-[40px]">
      <h2 className="text-center text-[45px] font-bold mb-10">Our Clients</h2>
      <Slider {...settings}>
        {clientLogos.map((logo) => (
          <div key={logo.id} className="p-4">
            <img src={logo.src} alt={logo.alt} className="w-full h-[100px] object-contain" />
            {/* <h1>hwllo</h1> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurClint;
