import React from 'react';

const SingleBrand = ({propProduct}) => {
    return (
        <div className='bg-purple-400 p-3 rounded-lg text-white font-bold'>
            <p>{propProduct?.brand}</p>
            
        </div>
    );
};

export default SingleBrand;