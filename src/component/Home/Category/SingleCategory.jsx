import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = () => {
    return (
        <div className="card w-full bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={''} alt="Shoes" className="rounded-xl h-48 w-full object-cover" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">title</h2>
                <p>description</p>
                <div className="card-actions">
                    <button className="btn btn-error bg-red-900 text-white">Delete</button>
                    <Link to={''} className="btn bg-orange-500">Edit</Link>
                    <Link to={''} className="btn bg-lime-300">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;