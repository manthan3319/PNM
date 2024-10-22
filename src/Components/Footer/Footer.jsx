import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-[#ff6b0052] py-[20px]'>
            <div className='lg:max-w-[1850px] px-[20px] m-auto lg:mt-[40px]'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 md:gap-y-8'>
                    <div>
                        <h1 className='md:text-[30px] font-poppins font-semibold'>Questions?</h1>

                        <div className='mt-[10px] flex flex-col gap-[10px]'>
                            <p className='xl:text-[25px] text-[20px]'><span><i class="fa fa-phone" aria-hidden="true"></i></span> <span>
                                 +91 79036 89288</span></p>

                            <p className='xl:text-[25px] text-[20px]'><span><i class="fa fa-envelope-o" aria-hidden="true"></i></span> <span>
                            info@pnmess.in </span></p>
                        </div>


                        <div className='mt-[20px]'>
                            <h1 className='md:text-[25px] font-poppins font-semibold'>Stay Connected</h1>

                            <div className='flex gap-[10px]'>
                                <Link className='text-[30px] text-orange'><i class="fa fa-linkedin-square" aria-hidden="true"></i></Link>
                                <Link className='text-[30px] text-orange'><i class="fa fa-instagram" aria-hidden="true"></i></Link>
                                <Link className='text-[30px] text-orange'><i class="fa fa-youtube-play" aria-hidden="true"></i></Link>
                                <Link className='text-[30px] text-orange'><i class="fa fa-facebook-official" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <h1 className='md:text-[25px] font-poppins font-bold text-orange'>Company</h1>

                        <div className='mt-[15px]'>
                            <ul className='flex flex-col gap-[15px]'>
                                <li><Link className='border-b-[1px] border-transparent text-[18px] font-poppins hover:text-orange hover:border-b-[1px] hover:border-orange inline-block'>Home</Link></li>
                                <li><Link className='border-b-[1px] border-transparent text-[18px] font-poppins hover:text-orange hover:border-b-[1px] hover:border-orange inline-block'>PNM SAFETY</Link></li>
                                <li><Link className='border-b-[1px] border-transparent text-[18px] font-poppins hover:text-orange hover:border-b-[1px] hover:border-orange inline-block'>PNM ENVIRONMENT</Link></li>
                                <li><Link className='border-b-[1px] border-transparent text-[18px] font-poppins hover:text-orange hover:border-b-[1px] hover:border-orange inline-block'>About</Link></li>
                                <li><Link className='border-b-[1px] border-transparent text-[18px] font-poppins hover:text-orange hover:border-b-[1px] hover:border-orange inline-block'>BLOG</Link></li>
                                <li><Link className='border-b-[1px] border-transparent text-[18px] font-poppins hover:text-orange hover:border-b-[1px] hover:border-orange inline-block'>GALLERY</Link></li>
                                <li><Link className='border-b-[1px] border-transparent text-[18px] font-poppins hover:text-orange hover:border-b-[1px] hover:border-orange inline-block'>CONTACT US</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className=''>
                        <h1 className='md:text-[25px] font-poppins font-bold text-orange'>Environment Services</h1>

                        <div className='mt-[15px]'>
                            <ul className='flex flex-col gap-[15px]'>
                                <li><Link className='border-b-[1px] border-transparent text-[18px] font-poppins hover:text-orange hover:border-b-[1px] hover:border-orange inline-block'>AUDIT SCHEMES</Link></li>
                                <li><Link className='border-b-[1px] border-transparent text-[18px] font-poppins hover:text-orange hover:border-b-[1px] hover:border-orange inline-block'>SITE APPRAISAL STUDIES</Link></li>
                                <li><Link className='border-b-[1px] border-transparent text-[18px] font-poppins hover:text-orange hover:border-b-[1px] hover:border-orange inline-block'>MODELLING SERVICES</Link></li>
                                <li><Link className='border-b-[1px] border-transparent text-[18px] font-poppins hover:text-orange hover:border-b-[1px] hover:border-orange inline-block'>MARINE SERVICES</Link></li>
                                <li><Link className='border-b-[1px] border-transparent text-[18px] font-poppins hover:text-orange hover:border-b-[1px] hover:border-orange inline-block'>TURNKEY PROJECTS</Link></li>
                                <li><Link className='border-b-[1px] border-transparent text-[18px] font-poppins hover:text-orange hover:border-b-[1px] hover:border-orange inline-block'>TRAINING SERVICES</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className=''>
                        <h1 className='md:text-[25px] font-poppins font-bold text-orange'>Industrial Safety & Health</h1>

                        <div className='mt-[15px]'>
                            <ul className='flex flex-col gap-[15px]'>
                                <li><Link className='border-b-[1px] border-transparent text-[18px] font-poppins hover:text-orange hover:border-b-[1px] hover:border-orange inline-block'>Risk Assessment</Link></li>
                                <li><Link className='border-b-[1px] border-transparent text-[18px] font-poppins hover:text-orange hover:border-b-[1px] hover:border-orange inline-block'>HAZOP</Link></li>
                                <li><Link className='border-b-[1px] border-transparent text-[18px] font-poppins hover:text-orange hover:border-b-[1px] hover:border-orange inline-block'>Incident Investigation</Link></li>
                                <li><Link className='border-b-[1px] border-transparent text-[18px] font-poppins hover:text-orange hover:border-b-[1px] hover:border-orange inline-block'>Fire Services</Link></li>
                                <li><Link className='border-b-[1px] border-transparent text-[18px] font-poppins hover:text-orange hover:border-b-[1px] hover:border-orange inline-block'>Permit to Work System</Link></li>
                                <li><Link className='border-b-[1px] border-transparent text-[18px] font-poppins hover:text-orange hover:border-b-[1px] hover:border-orange inline-block'>Electrical Safety</Link></li>
                                <li><Link className='border-b-[1px] border-transparent text-[18px] font-poppins hover:text-orange hover:border-b-[1px] hover:border-orange inline-block'>Legal Compliance</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className='text-center py-[10px] border-t-2 border-orange mt-[30px]'>
                    <Link to="https://brightensolutions.com/" className='font-roboto text-[15px] inline-block'>Copyright © 2016-24 brighten solutions| All Right Reserved</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
