import React from 'react';
import Banner from './Banner';
import AllProducts from './All Products/AllProducts';
import ContactUs from './All Products/ContactUs/ContactUs';

const Home = () => {
    return (
        <div className='my-10'>
            <Banner/>
            <AllProducts></AllProducts>
            <ContactUs/>
        </div>
    );
};

export default Home;