import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProducts from './SingleProducts';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase/Firebase.config';
import axios from 'axios';

const AllProducts = () => {
    const [products, setSProducts] = useState([]);
    const token = localStorage.getItem('token');
    const [user] = useAuthState(auth);

    useEffect(() => {
        featchProducts();
    }, [user,token]);

    const featchProducts = async () => {
        try {
            const headers = {
                Authorization: `Bearer ${token}`
            };
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/products?email=${user?.email}`, { headers });

            setSProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error; // Rethrow the error to handle it outside
        }
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map(product => (
                            <SingleProducts propProduct={product} allProducts={products} setProducts={setSProducts} key={product._id} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProducts;