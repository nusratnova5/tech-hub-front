import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import { auth } from '../../../Firebase/Firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';

const HomeProducts = () => {
    const loaderShoes = useLoaderData();
    const [products, setProducts] = useState(loaderShoes);
    const [user] = useAuthState(auth);
    console.log(user?.email)

    const [searchParams] = useSearchParams(); // Get the search parameters

    const title = searchParams.get('title');
    const token = localStorage.getItem('token');    

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                if (token) {
                    const config = {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    };
                    const url = `${import.meta.env.VITE_API_URL}/products?notEmail=${user?.email}${title ? `&title=${encodeURIComponent(title)}` : ''}`;
                    const response = await axios.get(url,config);
                    setProducts(response.data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [user,token]);
    return (
        <div className='text-center mt-20'>
        <h3 className='text-5xl font-bold'>Our products</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {products?.reverse()?.slice(0,3)?.map(product => (
                <SingleProduct propProduct={product} key={product._id} />
            ))}
        </div>
        <div>

        </div>
    </div>
    );
};

export default HomeProducts;