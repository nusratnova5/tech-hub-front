import React from 'react';
import img from '../Contact/contact.jpg'
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import Faq from '../Home/FAQ/Faq';
import PromoOne from '../shared/PromoOne/PromoOne';
const Contact = () => {
    return (
        <div>
            <div className='bg-accent pt-20'>
                <div className='flex justify-between lg:h-[470px] w-3/4 mx-auto '>
                    <div className='flex flex-col justify-center items-start flex-1 text-white px-5'>
                        <h1 className='text-4xl mb-5 font-bold'>Contact Us</h1>
                        <p className='text-xl'>Hello, Tech Enthusiast! Welcome to the contact TechHub, where your tech journey gets personalized. Whether you're on the hunt for the latest gadgets, need a hand with a product, or simply want to share your thoughts, we're all ears.</p>
                    </div>
                    <div className='h-[530px] w-[400px]'>
                        <img className='h-full w-full' src={img}></img>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 justify-between lg:m-20 '>
                <div className='lg:col-span-2 p-10'>
                    <h1 className='text-4xl text-accent font-bold my-5'>Get in touch</h1>
                    <p className='mb-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quaerat vero nisi harum quibusdam sint?</p>
                    <div className='flex gap-3 my-5'>
                        <p className='text-xl text-accent'><FaMapMarkerAlt /></p>
                        <div className='flex flex-col gap-1 border-b pb-5 w-full'>
                            <p className='text-accent font-medium'>ADDRESS</p>
                            <p>Road 28, Mirpur, Dhaka</p>
                        </div>

                    </div>
                    <div className='flex gap-3  my-5'>
                        <p className='text-xl text-accent'><FaPhone /></p>
                        <div className='flex flex-col gap-1 border-b pb-5 w-full'>
                            <p className='text-accent font-medium'>PHONE</p>
                            <p>(+880) 1521260100</p>
                        </div>

                    </div>
                    <div className='flex gap-3  my-5'>
                        <p className='text-xl text-accent'><FaEnvelope /></p>
                        <div className='flex flex-col gap-1 border-b pb-5 w-full'>
                            <p className='text-accent font-medium'>Email</p>
                            <p>nusrat.nova16@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-accent font-medium'>FOLLOW</h1>
                        <div className='flex text-xl gap-5 my-2 text-accent'>
                            <FaFacebook/>
                            <FaInstagram/>
                            <FaTwitter/>
                            <FaYoutube/>
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-2 p-10'>
                <div className=' bg-gray p-5'>
                    <form className="">
                        <div className="w-full flex gap-5">
                            <div className='w-full  m-5'>
                                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First Name</label>
                                <input id="firstname" name="firstname" type="text" className="mt-1 block w-full border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="First name" />
                            </div>
                            <div className='w-full  m-5'>
                                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input id="lastname" name="lastname" type="text" className="mt-1 block w-full border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Last name" />
                            </div>
                        </div>
                        <div className='m-5'>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input id="email" name="email" type="email" className="mt-1 block w-full border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm lg:h-[55px]" placeholder="Email" />
                        </div>
                        <div className='mx-5 my-8'>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" name="message" rows="4" className="mt-1 block w-full border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Type your message here"></textarea>
                        </div>
                        <div className='mx-5 my-3'>
                            <button type="submit" className=" inline-flex justify-center py-2 px-4 border border-gray-700 shadow-sm text-sm font-medium text-gray-700  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send</button>
                        </div>
                    </form>


                </div>
                </div>
            </div>
            <Faq/>
            <PromoOne/>
        </div>
    );
};

export default Contact;