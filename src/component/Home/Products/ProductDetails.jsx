import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLoaderData } from 'react-router-dom';
import { auth } from '../../../Firebase/Firebase.config';
import Swal from 'sweetalert2';
import axios from 'axios';
import { FaTag } from 'react-icons/fa';
import { IoPricetags } from 'react-icons/io5';
import { GiCheckMark } from 'react-icons/gi';
import Products from './Products';
import ProductFeedback from '../../Feedback/ProductFeedback';

const ProductDetails = () => {
    const product = useLoaderData();
    const [user] = useAuthState(auth);

    const buyProduct = (e) => {
        e.preventDefault();

        const requestBody = {
            status: 2,
            buyerEmail: user?.email,
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Buy"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.put(`${import.meta.env.VITE_API_URL}/products/${product?._id}`, requestBody);
                    console.log('Product created successfully:', response);
                    if (response.data.acknowledged) {
                        Swal.fire({
                            text: "Product bought successfully.",
                            icon: "success"
                        });
                    }
                } catch (error) {
                    console.error('Error updating product:', error.response ? error.response.data : error.message);
                }
            }
        });

    }

    return (
       <div>
         <div className="grid lg:grid-cols-6 grid-cols-1 gap-8 w-3/4 mx-auto my-10">
            <div className="col-span-2 w-full h-[470px] overflow-hidden aspect-square border border-accent">
                <img src={product?.imageUrl} alt="Products" className="w-full object-cover" />
            </div>
            <div className="col-span-4">
                <h2 className="card-title text-accent text-3xl mb-2">{product?.title}</h2>
                <div className='flex items-center gap-1 text-gray-700'>
                    <span className='text-xl text-gray-700'><IoPricetags /></span>
                    <span className='text-xl text-gray-700'>{product?.brand}</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-2xl'>৳</span>
                    <span className='ml-1 mt-2'>{product?.price}</span>
                </div>
                <p className='w-[80%] mt-3'>{product?.description}</p>
                <div className=''>
                    <button onClick={buyProduct} className='btn bg-accent text-white px-7 tracking-widest mt-3 rounded-none'>ADD TO CART</button>
                </div>
                <hr className='lg:w-[85%] mt-5 border-gray-300' />
                <div>
                    <p className='my-2 text-accent font-bold'>Delivery charge: Inside Dhaka <span className='text-xl'>৳</span>80 | Outside Dhaka <span className='text-xl'>৳</span>150 </p>
                    <div className='flex items-center gap-1'>
                    <GiCheckMark/>
                    <p>No-Risk Money Back Guarantee!</p>
                    </div>
                    <div className='flex items-center gap-1'>
                    <GiCheckMark/>
                    <p>No Hassle Refunds</p>
                    </div>
                    <div className='flex items-center gap-1'>
                    <GiCheckMark/>
                    <p>Secure Payments</p>
                    </div>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
        <hr className='w-3/4 mx-auto' />
        <ProductFeedback productId={product?._id}/>
        <div>
            
        </div>
       </div>
    );
};

export default ProductDetails;