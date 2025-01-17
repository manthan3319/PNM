import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Drawer from 'react-modern-drawer';
import { scroller } from 'react-scroll'; 
import 'react-modern-drawer/dist/index.css';
import { logo, logo2, logo3 } from '../Images/Images';

const Navbar = () => {
    const [links, setLinks] = useState([]);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    useEffect(() => {
        setLinks([
            { name: 'Home', scrollTo: 'Home' },
            { name: 'About', scrollTo: 'about-us' },
            { name: 'OH & Safety Solutions', scrollTo: 'services' },
            { name: 'Environment Solutions', scrollTo: 'services' },
            { name: 'ESG', path: '/esg' },
            { name: 'Training / Audit', path: '/TrainingandAudit' },
            { name: 'BLOG', path: '/blogs' },
            { name: 'GALLERY', path: '/gallery' }
        ]);
    }, []);

    const handleScroll = (scrollTo) => {
        if (window.location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                scroller.scrollTo(scrollTo, {
                    duration: 500,
                    delay: 0,
                    smooth: 'easeInOutQuart'
                });
            }, 100);
        } else {
            scroller.scrollTo(scrollTo, {
                duration: 500,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }
    };

    return (
        <div className='fixed w-[100%] z-[9999]'>
            {/* Top contact info */}
            <div className='bg-slate-100 py-[15px] lg:block hidden'>
                <div className='lg:max-w-[1850px] px-[20px] m-auto'>
                    <div className='flex lg:flex-row flex-col items-center gap-[10px] justify-center md:justify-between'>
                        <p className='font-poppins text-black flex items-center gap-[5px]'>
                            <span className='lg:text-[20px]'>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                            <span>info@pnmess.in</span>
                        </p>

                        <p className='font-poppins text-black flex gap-[5px] text-center'>
                            <span className='lg:text-[20px]'>
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                            </span>
                            <span>811, SNS Arista, B/H Prime Shoppers, Opp. Happy Home Residency <br /> University Road, Vesu, Surat- 395007</span>
                        </p>

                        <p className='font-poppins text-black flex items-center gap-[5px]'>
                            <span className='lg:text-[20px]'>
                                <i className="fa fa-phone" aria-hidden="true"></i>
                            </span>
                            <span>+91 79036 89288, 0261-7961074</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className='bg-orange py-[12px] border-b-[1px] lg:block hidden'>
                <div className='lg:max-w-[1850px] px-[20px] m-auto'>
                    <div className='flex xl:flex-row lg:flex-col lg:gap-y-[25px]  items-center justify-between'>
                        <div className='2xl:w-[20%]'>
                            <Link to="/"><img src={logo3} alt='logo' className='xl:w-[150px] w-[120px]' /></Link>
                        </div>

                        <div className='2xl:w-[70%] xl:w-[70%]'>
                            <ul className='flex 2xl:flex-row justify-center xl:gap-y-4 xl:flex-wrap xl:space-x-10 space-x-8'>
                                {links.map(link => (
                                    <li key={link.name} className="relative">
                                        {link.scrollTo ? (
                                            <button
                                                onClick={() => handleScroll(link.scrollTo)}
                                                className={link.name === 'CONTACT US' ? 'bg-orange py-[10px] px-[20px] text-white font-poppins font-semibold rounded-lg hover:bg-orange hover:text-white' : 'text-white font-poppins font-bold hover:text-gray-400'}
                                            >
                                                <span className='whitespace-nowrap'>{link.name}</span>
                                            </button>
                                        ) : (
                                            <Link to={link.path} className={'text-white font-poppins font-bold hover:text-gray-400'}>
                                                <span className='whitespace-nowrap'>{link.name}</span> 
                                            </Link>
                                        )}
                                        <span className="absolute bottom-[-3px] left-0 right-0 h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='2xl:w-[10%] '>
                            <Link to="/contact" className='bg-white py-[10px] px-[20px] text-black font-poppins font-semibold rounded-lg hover:bg-orange hover:text-white'>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className='lg:hidden block navbarshadow'>
                <div className='bg-white static flex justify-between px-[10px] py-[15px] items-center border-b'>
                    <div>
                        <Link to="/"> <img src={logo} alt='pnm logo' className='w-[150px]' /></Link>
                    </div>
                    <div>
                        <button onClick={toggleDrawer} className='text-[35px]'><i className="fa fa-bars" aria-hidden="true"></i></button>
                    </div>
                </div>

                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='right'
                    className='bla bla bla'
                >
                    <div>
                        <ul className='flex flex-col space-y-6 px-[20px] py-[25px]'>
                            {links.map(link => (
                                <li key={link.name}>
                                    {link.scrollTo ? (
                                        <button
                                            onClick={() => handleScroll(link.scrollTo)}
                                            className={link.name === 'CONTACT US' ? 'bg-orange py-[10px] px-[20px] text-white font-poppins font-semibold rounded-lg hover:bg-orange hover:text-white' : 'text-orange font-poppins font-bold hover:text-black'}
                                        >
                                            <span className='whitespace-nowrap'>{link.name}</span> {/* Prevent line breaks */}
                                        </button>
                                    ) : (
                                        <Link to={link.path} className={link.name === 'CONTACT US' ? 'bg-orange py-[10px] px-[20px] text-white font-poppins font-semibold rounded-lg hover:bg-orange hover:text-white' : 'text-orange font-poppins font-bold hover:text-black'}>
                                            <span className='whitespace-nowrap'>{link.name}</span> {/* Prevent line breaks */}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <div className='2xl:w-[10%] '>
                            <Link to="/contact" className='bg-white py-[10px] px-[20px] text-black font-poppins font-semibold rounded-lg hover:bg-orange hover:text-white'>Contact Us</Link>
                        </div>
                    </div>
                </Drawer>
            </div>
        </div>
    );
};

export default Navbar;
