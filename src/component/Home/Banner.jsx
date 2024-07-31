import React from 'react';
import bannerImage from './Images/banner.jpg'; // Import the image
import { Link } from 'react-router-dom';
import parentimg from '../Home/Images/parent.avif'
import childimg from '../Home/Images/child.jpg'

const Banner = () => {
    return (
       <div className='bg-accent pt-20'>
         <div className='flex flex-col lg:flex-row justify-between lg:h-[570px] lg:w-3/4 mx-auto '>
            <div className='flex flex-col justify-center lg:items-start items-center text-white px-5'>
                <p className='text-sm mb-5 font-bold'>WELCOME TO OUR SHOP</p>
                <h1 className='text-7xl font-bold text-center lg:text-start mb-5'>Elevate Your <br/> Space with Technology Elegance</h1>
                <button className='mt-5 px-4 py-2 border '>SHOP NOW</button>
            </div>

            <div className='relative h-[400px]'>
                <div className='m-6'>
                    <img className='lg:h-[630px] lg:w-[800px] h-[450px] w-full' src={parentimg}></img>
                </div>
                <div className='lg:h-[300px] lg:w-[250px]  absolute lg:-inset-x-32 lg:inset-y-32 -bottom-20 inset-x-24'>
                    <img src={childimg} className='h-[200px] w-full object-cover'></img>
                </div>
            </div>
        </div>
       </div>

    );
};

export default Banner;