import React, { useEffect, useState } from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import SingleBrand from './SingleBrand';
import axios from 'axios';

const Brands = () => {
    const [products, setProducts] = useState([]);

    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');

    const getUniqueBrands = (data) => {
        const brands = data.map(item => item.brand);
        return [...new Set(brands)];
    };

    const brands = getUniqueBrands(products);
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
                    const url = `${import.meta.env.VITE_API_URL}/products`;
                    const response = await axios.get(url, config);
                    setProducts(response.data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [token]);
    return (
        <div className='text-center my-20'>
            <h3 className='text-5xl font-bold'>Our Exclusive Brands</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {brands?.map(brand => (
                    <SingleBrand brand={brand} key={brand} />
                ))}
            </div>
            <div>

            </div>
        </div>
    );
};

export default Brands;