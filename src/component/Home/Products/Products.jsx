import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const Products = ({heading}) => {
    const [products, setProducts] = useState([]);

    const [searchParams] = useSearchParams(); // Get the search parameters

    const title = searchParams.get('title');
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchProducts = async () => {
            console.log('called');
            try {
                const url = `${import.meta.env.VITE_API_URL}/products${title ? `?title=${encodeURIComponent(title)}` : ''}`;
                const response = await axios.get(url);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [token]);

    return (
        <div className='text-center w-3/4 mx-auto'>
            <h3 className='text-4xl font-bold mt-16 mb-8'>{heading}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {products?.map(product => (
                    <SingleProduct propProduct={product} key={product._id} />
                ))}
            </div>
            <div>

            </div>
        </div>
    );
};

export default Products;