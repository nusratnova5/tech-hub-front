import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Dashboard = () => {
    const data = useLoaderData();
    return (
        <div>
            <div className="grid grid-cols-2 gap-10">
                <div className="card w-full bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Total User</h2>
                        <p>{data?.userCount}</p>
                    </div>
                </div>
                <div className="card w-full bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Total Products</h2>
                        <p>{data?.productCount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;