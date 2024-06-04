import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const Products = () => {
    const loaderShoes = useLoaderData();
    const [products, setProducts] = useState(loaderShoes);

    const [searchParams] = useSearchParams(); // Get the search parameters

    const title = searchParams.get('title');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = localStorage.getItem('token');        
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };
                const url = `${import.meta.env.VITE_API_URL}/products${title ? `?title=${encodeURIComponent(title)}` : ''}`;
                const response = await axios.get(url,config);
                setProducts(response.data);
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