import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import { auth } from '../../Firebase/Firebase.config';

const AddProducts = () => {
    const [user] = useAuthState(auth);
    const addProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const id = form.id.value;
        const title = form.title.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const imageUrl = form.imageUrl.value;

        const requestBody = {
            title: title,
            brand: brand,
            price: price,
            description: description,
            imageUrl: imageUrl,
            sellerEmail: user?.email,
            status: 1,
            buyerId: null,
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Add"
        }).then(async (result)  =>  {
            if (result.isConfirmed) {
                try {
                    const response = await axios.post(`${import.meta.env.VITE_API_URL}/products`, requestBody);
                    console.log('Product created successfully:', response);
                } catch (error) {
                    console.error('Error creating user:', error.response ? error.response.data : error.message);
                }
                   
            }
        });

    }
    return (
        <div className=''>
            <form onSubmit={addProduct}>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">ID</span>
                    </div>
                    <input type="text" name='id' placeholder="ID" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Title</span>
                    </div>
                    <input type="text" name='title' placeholder="Title" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Brand</span>
                    </div>
                    <input type="text" name='brand' placeholder="Brand" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Price</span>
                    </div>
                    <input type="text" name='price' placeholder="Price" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Description</span>
                    </div>
                    <input type="text" name='description' placeholder="Description" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Image Url</span>
                    </div>
                    <input type="text" name='imageUrl' placeholder="Image Url" className="input input-bordered w-full" />
                </label>

                <div>
                    <button type='submit' className="btn bg-lime-600 mt-5 text-white text-xl">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;