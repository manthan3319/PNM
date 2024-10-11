import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick'; // Import the Slider component
import { environmentServices, safetyHealthServices } from '../Services/Services';
import { bg1, CulturalTransformation, serviceBg } from '../Images/Images';

const EnvironmentServices = () => {
    const { serviceName } = useParams();
    const service = environmentServices.find(s => s.name === serviceName) || safetyHealthServices.find(s => s.name === serviceName);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!service) {
        return <div className="text-center text-red-500">Service not found</div>;
    }

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    return (
        <div className='md:pt-[160px] pt-[260px] service-details' >
           <div className="relative py-[50px] bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url(${serviceBg})`,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                minHeight:"400px"
            }}>
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className='relative text-center z-[99]'>
                    <h1 className='font-roboto font-bold text-[35px] text-white'>{service.name}</h1>
                    <Link to="/" className='flex flex-row justify-center gap-[10px] text-orange font-poppins font-bold mt-[10px]'>
                        <span>PNM ENVIRONMENT</span> / <span>HOME</span>
                    </Link>
                </div>
            </div>

            <div className='relative lg:max-w-[1850px] px-[20px] m-auto lg:my-[50px] my-[50px]'>
                <div className='flex lg:flex-row flex-col justify-between'>
                    <div className='lg:w-[40%] w-[100%] md:max-h-[400px] '>
                        <Slider {...sliderSettings} className="service-slider h-full">
                            {service.sliderImages && service.sliderImages.map((image, index) => (
                                <div key={index} className="h-full bg-slate-400">
                                    <img src={image} alt={`${service.name} slide ${index + 1}`} className="service-img  md:max-h-[400px] min-h-[200px] m-auto max-h-[200px]  md:min-h-[400px] " />
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className='lg:w-[50%] w-[100%]'>
                        <p className="service-description mt-4 text-lg">
                            <strong>Service Details:</strong>
                        </p>

                        <ul className="service-details-list mt-2 text-lg text-left mx-auto">
                            {service.details && service.details.map((detail, index) => (
                                <li key={index} className="flex items-start mt-2">
                                    <span className="dot mr-2">•</span>
                                    {detail}
                                </li>
                            ))}
                        </ul>

                        {!service.details && (
                            <p className="mt-4 text-lg">This is a detailed description of the service.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnvironmentServices;
