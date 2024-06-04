import axios from 'axios';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Profile = () => {
    const userData = useLoaderData();

    const [displayName, setDisplayName] = useState(userData.displayName);
    const [photoURL, setPhotoURL] = useState(userData?.photoURL);

    const updateProfile = (e) => {
        e.preventDefault();
        const requestBody = {displayName, photoURL}

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Edit"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const token = localStorage.getItem('token');        
                    const config = {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    };
                    const response = await axios.put(`${import.meta.env.VITE_API_URL}/users/${userData?._id}`, requestBody, config);
                    console.log('Profile updated successfully:', response);
                    if(response.data.acknowledged){
                          Swal.fire({
                            text: "Profile updated successfully.",
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
            <form onSubmit={updateProfile}>
                <div>
                    <img src={userData.photoURL} alt="" />
                </div>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Title</span>
                    </div>
                    <input type="text" name='displayName' onChange={(e) => setDisplayName(e.target.value)} defaultValue={displayName} placeholder="Title" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Brand</span>
                    </div>
                    <input type="text" name='photoURL' onChange={(e) => setPhotoURL(e.target.value)} defaultValue={photoURL} placeholder="Brand" className="input input-bordered w-full" />
                </label>

                <div>
                    <button type='submit' className="btn bg-purple-900 mt-5 text-white text-xl">Update</button>
                </div>
            </form>
        </div>
    );
};

export default Profile;