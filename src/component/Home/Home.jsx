import React from 'react';
import Banner from './Banner';
import Products from './Products/Products';
import WhyUs from './WhyUs/WhyUs';
import Faq from './FAQ/Faq';
import QuickTips from './QuickTips/QuickTips';
import HomeProducts from './Products/HomeProducts';
import Brands from './Brand/Brands';

const Home = () => {
    return (
        <div className='my-10'>
            <Banner/>
            <HomeProducts/>
            <Brands/>
            <QuickTips/>
            <WhyUs/>
            <Faq/>
        </div>
    );
};

export default Home;