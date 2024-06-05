import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleProduct = ({propProduct}) => {
    const { id } = useParams(); // Get the product ID from URL parameters

    return (
        <div className="card w-full bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={propProduct?.imageUrl} alt="Products" className="rounded-xl h-48 w-full object-cover" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{propProduct?.title}</h2>
                <p>{propProduct?.description?.substring(0, 100)}</p>
                <div className="card-actions">
                    <Link to={`/product-details/${propProduct._id}`} className="btn bg-purple-400">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;