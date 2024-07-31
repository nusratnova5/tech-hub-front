import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleProducts from './SingleProducts';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase/Firebase.config';
import axios from 'axios';
import { VscDiffAdded } from 'react-icons/vsc';
import { RiAddLargeLine } from 'react-icons/ri';

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
                <div className='flex justify-between mr-32 mb-12'>
                    <h1 className='text-accent text-3xl font-bold uppercase tracking-widest'>All Products</h1>
                    <Link to={'/dashboard/add-products'} className='flex justify-center items-center gap-1 px-3 py-2 text-white bg-accent tracking-widest'><RiAddLargeLine className=''/><p>Add</p></Link>
                </div>
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