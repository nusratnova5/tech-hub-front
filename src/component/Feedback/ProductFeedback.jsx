import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Swal from 'sweetalert2';

const ProductFeedback = ({productId}) => {
    console.log(productId);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    const [rating, setRating] = useState(0);
    const [feedbacks, setFeedbacks] = useState([]);
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const handleRating = (value) => {
        setRating(value);
    };
    const onSubmit = async (data) =>{
        data.rating=rating;//key=value
        data.productId=productId;
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/product-feedback`, data);
        console.log(response);
        if (response.data.acknowledged) {
            Swal.fire({
                text: "Feedback added successfully.",
                icon: "success"
            });
        }
    }

    useEffect(()=>{
        fetchFeedback()
    },[productId])

    const fetchFeedback= async()=>{
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/product-feedback?queryProductId=${productId}`)
        setFeedbacks(response?.data);
        console.log(response);
    }

    return (
        <div>
            <div className="flex">
                {Array(fullStars).fill(0).map((_, i) => (
                    <button key={`full-${i}`} onClick={() => handleRating(i + 1)}>
                        <FaStar className="text-yellow-500" />
                    </button>
                ))}
                {hasHalfStar && (
                    <button onClick={() => handleRating(fullStars + 0.5)}>
                        <FaStarHalfAlt className="text-yellow-500" />
                    </button>
                )}
                {Array(emptyStars).fill(0).map((_, i) => (
                    <button key={`empty-${i}`} onClick={() => handleRating(fullStars + (hasHalfStar ? 1 : 0) + i + 1)}>
                        <FaRegStar className="text-yellow-500" />
                    </button>
                ))}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Feedback</span>
                    </label>
                    <textarea className="textarea textarea-bordered" {...register("feedback")} placeholder="Bio"></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" {...register("email")} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" {...register("name")} className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Rate</button>
                </div>
            </form>
            <div>
                {feedbacks?.map((feedback)=>(
                    <div>
                        <p>{feedback?.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductFeedback;