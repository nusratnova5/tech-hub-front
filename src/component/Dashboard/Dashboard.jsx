import React from 'react';
import StatusPieChart from './StatusPieChart';
import PriceBarChart from './PriceBarChart';

const Dashboard = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="card w-full bg-gray-100 p-4">
                    <h3 className="font-bold  text-accent text-2xl text-center">Product Status</h3>
                    <StatusPieChart />
                </div>
                <div className="card w-full bg-gray-100 p-4 col-span-2">
                    <h3 className="font-bold  text-accent text-2xl text-center mb-16">Price Range</h3>
                    <PriceBarChart />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
