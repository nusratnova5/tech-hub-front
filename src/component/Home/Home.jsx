import React from 'react';
import Banner from './Banner';
import Products from './Products/Products';
import ContactUs from './ContactUs/ContactUs';
import WhyUs from './WhyUs/WhyUs';
import Category from './Category/Category';

const Home = () => {
    return (
        <div className='my-10'>
            <Banner/>
            <Category/>
            <Products></Products>
            <WhyUs/>
            <ContactUs/>
        </div>
    );
};

export default Home;