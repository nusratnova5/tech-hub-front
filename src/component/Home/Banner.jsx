import React from 'react';
import bannerImage from './Images/banner.jpg'; // Import the image
import { Link } from 'react-router-dom';
import parentimg from '../Home/Images/parent.avif'
import childimg from '../Home/Images/child.jpg'

const Banner = () => {
    return (
       <div className='bg-accent pt-20'>
         <div className='flex justify-between lg:h-[570px] w-3/4 mx-auto '>
            <div className='flex flex-col justify-center items-start text-white px-5'>
                <p className='text-sm mb-5 font-bold'>WELCOME TO OUR SHOP</p>
                <h1 className='text-7xl font-bold text-start mb-5'>Elevate Your <br/> Space with Technology Elegance</h1>
                <button className='mt-5 px-4 py-2 border '>SHOP NOW</button>
            </div>

            <div className='relative'>
                <div className=''>
                    <img className='h-[630px] w-[800px]' src={parentimg}></img>
                </div>
                <div className='h-[300px] w-[250px] absolute -inset-x-32 inset-y-32'>
                    <img src={childimg}></img>
                </div>
            </div>
        </div>
       </div>

    );
};

export default Banner;