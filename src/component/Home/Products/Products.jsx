import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

const Products = () => {
    const loaderShoes = useLoaderData();
    const [shoes, setShoes] = useState(loaderShoes);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
                setShoes(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

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