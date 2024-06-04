import React, { useState } from 'react';
import SingleProduct from './SingleProduct';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const loaderShoes = useLoaderData();
    const [shoes, setShoes] = useState(loaderShoes);

    return (
        <div className='text-center my-10'>
            <h3 className='text-4xl font-bold'>Our products</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {shoes?.map(shoe => (
                    <SingleProduct propShoe={shoe} allShoes={shoes} setShoes={setShoes} key={shoe._id} />
                ))}
            </div>
            <div>

            </div>
        </div>
    );
};

export default Products;