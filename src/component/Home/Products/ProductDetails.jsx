import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLoaderData } from 'react-router-dom';
import { auth } from '../../../Firebase/Firebase.config';
import Swal from 'sweetalert2';
import axios from 'axios';

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
        <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl mx-auto my-20 ">
            <figure className="px-10 pt-10">
                <img src={product?.imageUrl} alt="Shoes" className="rounded-xl h-80" />
            </figure>
            <div className="card-body items-center text-center mb-10">
                <h2 className="card-title">{product?.title}</h2>
                <div className='flex gap-10 m-5'>
                    <div>
                        <span className='font-bold'>Brand: </span>
                        <span>{product?.brand}</span>
                    </div>
                    <div>
                        <span className='font-bold'>Price: </span>
                        <span>{product?.price}</span>
                    </div>
                </div>
                <p className='mx-auto'>{product?.description}</p>
            </div>
<div className='relative'>
<button onClick={buyProduct} className='btn bg-purple-400 px-7 m-5  absolute bottom-0 right-0 '>Buy</button>

</div>
        </div>
    );
};

export default ProductDetails;