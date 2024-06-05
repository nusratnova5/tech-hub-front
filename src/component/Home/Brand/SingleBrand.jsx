import React from 'react';

const SingleBrand = ({brand}) => {
    return (
        <div className='bg-purple-400 p-3 rounded-lg text-white font-bold'>
            <p>{brand}</p>
        </div>
    );
};

export default SingleBrand;