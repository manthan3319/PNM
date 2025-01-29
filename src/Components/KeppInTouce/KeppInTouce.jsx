import React, { useState } from 'react';

const KeppInTouce = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        service: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className='bg-[#faebd76e] py-[50px] mt-[50px]'>
            <div className='lg:max-w-[1440px] px-[20px] m-auto lg:mt-[40px]'>
                <div className='flex md:flex-row flex-col '>
                    <div className='md:w-[30%]'>
                        <h1 className='md:text-[45px] font-bold font-roboto'>Keep in Touch!</h1>
                        <p className='text-[18px] mt-[10px] font-poppins'>Automatically receive updates.</p>
                        <p className='text-[18px] mt-[10px] text-gradient-end'>Join our Exclusive Newsletter</p>
                    </div>

                    <div className='md:w-[70%] mt-[20px] md:mt-0'>
                        <form onSubmit={handleSubmit} className='space-y-6'>
                            <div className='grid sm:grid-cols-2 grid-cols-1 gap-[15px]'>
                                <div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        placeholder='Enter Your Name'
                                        onChange={handleInputChange}
                                        className='w-full p-3 rounded bg-gray-700 text-white'
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder='Enter Your Number '
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className='w-full p-3 rounded bg-gray-700 text-white'
                                        required
                                    />
                                </div>
                            </div>

                            <div className='grid sm:grid-cols-2 grid-cols-1 gap-[15px]'>
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    value={formData.mobile}
                                    placeholder='Enter Your Subject'
                                    onChange={handleInputChange}
                                    className='w-full p-3 rounded bg-gray-700 text-white'
                                    required
                                />

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.mobile}
                                    placeholder='Enter Your email'
                                    onChange={handleInputChange}
                                    className='w-full p-3 rounded bg-gray-700 text-white'
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleInputChange}
                                    placeholder='Services(s) of Interest'
                                    className='w-full p-3 rounded bg-gray-700 text-white'
                                    required
                                />
                            </div>

                            <div className='text-center'>
                                <button
                                    type="submit"
                                    className='w-[50%] bg-orange-500 text-white inline-block bg-orange p-3 rounded font-bold text-[18px] hover:bg-orange-600'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeppInTouce;