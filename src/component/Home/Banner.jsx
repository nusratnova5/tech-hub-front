import React from 'react';
import bannerImage from './Images/banner.jpg'; // Import the image
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className="hero " style={{ backgroundImage: `url(${bannerImage})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Empower Your Life with the Latest Tech</h1>
                    <p className="mb-5">Explore the latest innovations and essential tech accessories at unbeatable prices. Stay ahead with our curated selection of top-quality products. Shop now and embrace the future.</p>
                    <button className="btn bg-purple-900 text-white border-none"><Link  to={'/products'}>Shop Now</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;