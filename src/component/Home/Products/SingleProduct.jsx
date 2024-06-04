import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleProduct = () => {
    const { id } = useParams(); // Get the product ID from URL parameters

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/products/${id}`);
                    console.log('Product created successfully:', response);
                    if(response.acknowledged){
                          Swal.fire({
                            text: "Product deleted successfully.",
                            icon: "success"
                        }); 
                        const remainingShoes = allShoes.filter(singleShoe => singleShoe._id != propShoe._id);
                        setShoes(remainingShoes); 
                    }

                } catch (error) {
                    console.error('Error deleting product:', error.response ? error.response.data : error.message);
                }
                   
            }
        });
    }
    return (
        <div className="card w-full bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={''} alt="Shoes" className="rounded-xl h-48 w-full object-cover" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{propShoe?.title}</h2>
                <p>{propShoe?.description}</p>
                <div className="card-actions">
                    <button onClick={handleDelete} className="btn btn-error bg-red-900 text-white">Delete</button>
                    <Link to={`/dashboard/edit-product/${propShoe._id}`} className="btn bg-orange-500">Edit</Link>
                    <Link to={`/dashboard/product-details/${propShoe._id}`} className="btn bg-lime-300">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;