import React from 'react';

const SingleBrand = ({ brand }) => {
    return (
        <div className='px-4'>
            <div className='bg-accent p-3 text-white font-bold h-20 flex items-center justify-center'>
    <p className='tracking-widest uppercase'>{brand}</p>
</div>

        </div>
    );
};

export default SingleBrand;