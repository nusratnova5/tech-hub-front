import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = ({propShoe}) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const shoe = useLoaderData();
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/${propShoe._id}`);
                setProduct(response.data);
            } catch (error) {
                setError('Error fetching product details');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);
    return (
        <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <img src={shoe?.imageUrl} alt="Shoes" className="rounded-xl h-80" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{shoe?.title}</h2>
                <div className='flex gap-10'>
                    <div>
                        <span className='font-bold'>Brand: </span>
                        <span>{shoe?.brand}</span>
                    </div>
                    <div>
                        <span className='font-bold'>Price: </span>
                        <span>{shoe?.price}</span>
                    </div>
                </div>
                <p>{shoe?.description}</p>
            </div>
        </div>
    );
};

export default ProductDetails;