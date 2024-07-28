import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import img from '../Products/images/img.jpg'
const SingleProduct = ({propProduct}) => {
    const { id } = useParams(); // Get the product ID from URL parameters

    return (
        <div className=''>
            <div className="card w-full bg-base-100 mb-10">
            <div className="w-full h-[350px] overflow-hidden aspect-square border border-accent">
                {/* <img src={propProduct?.imageUrl} alt="Products" className="rounded-xl h-48 w-full object-cover" /> */}
                <Link to={`/product-details/${propProduct?._id}`}><img src={propProduct?.imageUrl} alt="Products" className="w-full object-cover" /></Link>
            </div>
            <div className="items-start text-start">
                <h2 className="card-title mt-3 text-accent">{propProduct?.title}</h2>
                <p className="text-gray-700">${propProduct?.price}</p>
                {/* <p>{propProduct?.description?.substring(0, 100)}</p> */}
                {/* <div className="card-actions">
                    <Link to={`/product-details/${propProduct._id}`} className="btn bg-accent text-white rounded-none">Details</Link>
                </div> */}
            </div>
        </div>
        </div>
    );
};

export default SingleProduct;