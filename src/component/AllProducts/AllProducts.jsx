import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProducts from './SingleProducts';

const AllProducts = () => {
    const loaderProducts = useLoaderData();
    const [products, setSProducts] = useState(loaderProducts);
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