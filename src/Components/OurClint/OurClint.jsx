import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BirlaLogo, DMRSICON, industowers, ltlogo, NewExpandedLogo, regal, reliance, TataPowerlogo } from '../Images/Images';

const clientLogos = [
  { id: 1, src: reliance, alt: 'Client 1' },
  { id: 2, src: BirlaLogo, alt: 'Client 2' },
  { id: 3, src: TataPowerlogo, alt: 'Client 3' },
  { id: 4, src: ltlogo, alt: 'Client 4' },
  { id: 5, src: DMRSICON, alt: 'Client 5' }, 
  { id: 6, src: NewExpandedLogo, alt: 'Client 6' },
  { id: 7, src: industowers, alt: 'Client 7' },
  { id: 7, src: regal, alt: 'Client 7' },
];

const clientReviews = [
  {
    id: 1,
    review: "Great service! Highly recommend.",
    client: "Client 1"
  },
  {
    id: 2,
    review: "Excellent support and timely delivery.",
    client: "Client 2"
  },
  {
    id: 3,
    review: "Very satisfied with the collaboration.",
    client: "Client 3"
  },
  {
    id: 4,
    review: "Professional and dedicated team.",
    client: "Client 4"
  },
  {
    id: 5,
    review: "Will definitely work with them again!",
    client: "Client 5"
  },
];

const OurClint = () => {
  const logoSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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

  const reviewSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="relative lg:max-w-[1850px] px-[20px] m-auto lg:mt-[40px] overflow-hidden">
      <h2 className="text-center text-[45px] font-bold mb-10">Our Clients</h2>
      <div>
        <Slider {...logoSettings}>
          {clientLogos.map((logo) => (
            <div key={logo.id} className="p-4">
              <img src={logo.src} alt={logo.alt} className="w-full h-[100px] object-contain" />
            </div>
          ))}
        </Slider>
      </div>

      {/* <div className="mt-10">
        <h2 className="text-center text-[30px] font-bold mb-6">What Our Clients Say</h2>
        <Slider {...reviewSettings}>
          {clientReviews.map((review) => (
            <div key={review.id} className="p-4 text-center">
              <p className="text-lg italic">"{review.review}"</p>
              <p className="text-sm font-semibold mt-2">- {review.client}</p>
            </div>
          ))}
        </Slider>
      </div> */}
    </div>
  );
};

export default OurClint;
