import React from 'react';
import img from '../PromoOne/promo.png'

const PromoOne = () => {
    return (
        <div className='flex'>
            <div className='w-[50%]'>
                <img src={img} alt="" />

            </div>
            <div className='w-[50%] bg-accent flex flex-col justify-center items-start'>
                <h1 className='text-5xl text-white lg:w-[80%] ml-10 mb-5'>Elevate Your Space with Technology Elegance</h1>
                <button className='border border-white text-white ml-10 uppercase tracking-widest px-5 py-3'>Shop now</button>
            </div>
        </div>
    );
};

export default PromoOne;