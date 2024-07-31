import React from 'react';
import Banner from './Banner';
import Products from './Products/Products';
import WhyUs from './WhyUs/WhyUs';
import Faq from './FAQ/Faq';
import QuickTips from './QuickTips/QuickTips';
import HomeProducts from './Products/HomeProducts';
import Brands from './Brand/Brands';
import PromoOne from '../shared/PromoOne/PromoOne';
import Feedback from '../Feedback/Feedback';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <HomeProducts/>
            <Brands/>
            {/* <QuickTips/> */}
            <WhyUs/>
            {/* <Feedback/> */}
            <PromoOne/>
        </div>
    );
};

export default Home;