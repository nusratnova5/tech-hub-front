import React from 'react';
import Banner from './Banner';
import Products from './Products/Products';
import ContactUs from './ContactUs/ContactUs';
import WhyUs from './WhyUs/WhyUs';
import Category from './Category/Category';
import Faq from './FAQ/Faq';

const Home = () => {
    return (
        <div className='my-10'>
            <Banner/>
            <Products></Products>
            <WhyUs/>
            <Faq/>
            <ContactUs/>
        </div>
    );
};

export default Home;