import React from 'react';
import SingleCategory from './SingleCategory';

const Category = () => {
    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <SingleCategory/>
            <SingleCategory/>
            <SingleCategory/>
        </div>
    </div>
    );
};

export default Category;