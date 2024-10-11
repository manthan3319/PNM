import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll, scroller } from 'react-scroll';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { logo, logo2 } from '../Images/Images';

const Navbar = () => {
    const [links, setLinks] = useState([]);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    useEffect(() => {
        setLinks([
            { name: 'Home', scrollTo: 'Home' },
            { name: 'PNM SAFETY', scrollTo: 'services' },
            { name: 'PNM ENVIRONMENT', scrollTo: 'services' },
            { name: 'About', scrollTo: 'about-us' },
            { name: 'BLOG', path: '/blogs' },
            { name: 'GALLERY', path: '/gallery' },
            { name: 'CONTACT US', path: '/contact' }
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
            <div className='bg-orange py-[15px]'>
                <div className='lg:max-w-[1850px] px-[20px] m-auto'>
                    <div className='flex lg:flex-row flex-col items-center gap-[10px] justify-center md:justify-between'>
                        <p className='font-poppins text-white flex items-center gap-[5px]'>
                            <span className='lg:text-[20px]'>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                            <span>info@pnmess.com</span>
                        </p>

                        <p className='font-poppins text-white flex gap-[5px] text-center'>
                            <span className='lg:text-[20px]'>
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                            </span>
                            <span>811, SNS Arista, B/H Prime Shoppers, Opp. Happy Home Residency <br /> University Road, Vesu, Surat- 395007</span>
                        </p>

                        <p className='font-poppins text-white flex items-center gap-[5px]'>
                            <span className='lg:text-[20px]'>
                                <i className="fa fa-phone" aria-hidden="true"></i>
                            </span>
                            <span>+91 63528 45642, 0261-7961074</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className='bg-white py-[30px] border-b-[1px] lg:block hidden'>
                <div className='lg:max-w-[1850px] px-[20px] m-auto'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <Link to="/"><img src={logo} alt='logo' className='xl:w-[150px] w-[120px]'/></Link>
                        </div>

                        <div>
                            <ul className='flex xl:space-x-10 space-x-8'>
                                {links.map(link => (
                                    link.scrollTo ? (
                                        <li key={link.name}>
                                            <button
                                                onClick={() => handleScroll(link.scrollTo)}
                                                className={link.name === 'CONTACT US' ? 'bg-orange py-[10px] px-[20px] text-white font-poppins font-semibold rounded-lg hover:bg-orange hover:text-white' : 'text-orange font-poppins font-bold hover:text-black'}
                                            >
                                                {link.name}
                                            </button>
                                        </li>
                                    ) : (
                                        <li key={link.name}>
                                            <Link to={link.path} className={link.name === 'CONTACT US' ? 'bg-orange py-[10px] px-[20px] text-white font-poppins font-semibold rounded-lg hover:bg-orange hover:text-white' : 'text-orange font-poppins font-bold hover:text-black'}>
                                                {link.name}
                                            </Link>
                                        </li>
                                    )
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:hidden block navbarshadow'>
                <div className='bg-white static flex justify-between px-[10px] py-[15px] items-center border-b '>
                    <div>
                    <Link to="/"> <img src={logo} alt='pnm logo' className='w-[150px]'/></Link>
                    </div>
                    <div>
                        <button onClick={toggleDrawer} className='text-[35px]'><i class="fa fa-bars" aria-hidden="true"></i></button>
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
                                    link.scrollTo ? (
                                        <li key={link.name}>
                                            <button
                                                onClick={() => handleScroll(link.scrollTo)}
                                                className={link.name === 'CONTACT US' ? 'bg-orange py-[10px] px-[20px] text-white font-poppins font-semibold rounded-lg hover:bg-orange hover:text-white' : 'text-orange font-poppins font-bold hover:text-black'}
                                            >
                                                {link.name}
                                            </button>
                                        </li>
                                    ) : (
                                        <li key={link.name}>
                                            <Link to={link.path} className={link.name === 'CONTACT US' ? 'bg-orange py-[10px] px-[20px] text-white font-poppins font-semibold rounded-lg hover:bg-orange hover:text-white' : 'text-orange font-poppins font-bold hover:text-black'}>
                                                {link.name}
                                            </Link>
                                        </li>
                                    )
                                ))}
                            </ul>
                    </div>
                </Drawer>
            </div>
        </div>
    );
}

export default Navbar;
