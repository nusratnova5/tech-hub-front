import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ isOpenSidebar, toggleSidebar }) => {
    return (
        <div className="drawer lg:drawer-open z-10">
            <input checked={isOpenSidebar} type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label onClick={toggleSidebar} aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-accent text-white">
                    <li>
                        <div className="flex-1">
                            <Link to={'/'} className="btn btn-ghost text-xl pl-0">Tech Hub</Link>
                        </div>
                    </li>
                    <li><Link onClick={toggleSidebar} to={'/dashboard'}>Dashboard</Link></li>
                    <li><Link onClick={toggleSidebar} to={'/dashboard/all-products'}>All Products</Link></li>
                    <li><Link onClick={toggleSidebar} to={'/dashboard/add-products'}>Add Product</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default SideBar;