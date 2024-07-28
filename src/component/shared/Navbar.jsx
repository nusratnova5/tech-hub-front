import React, { useState } from 'react';
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase.config';
import Banner from '../Home/Banner';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleLogout = async () => {
    await signOut();
  };

  const handleSearch = () => {
    search && navigate(`/products?title=${search}`);
  }

  return (
    <div className="drawer bg-accent">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col bg-accent">
      {/* Navbar */}
      <div className="navbar  text-white w-3/4 mx-auto">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="mx-2 flex-1 px-2 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-3xl font-bold">TechHub</div> {/* Add your logo here */}
          </div>
          <div className="hidden lg:flex flex-1 justify-center font-bold">
            <ul className="menu menu-horizontal">
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/products'}>Products</Link></li>
              <li><Link to={'/dashboard'}>Dashboard</Link></li>
              <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
          </div>
          <div className="hidden lg:flex lg:items-center gap-4">
            <div className="join active:bg-transparent py-0 gap-0">
              <div>
                <input
                  onInput={(e) => setSearch(e.target.value)}
                  className="input input-bordered join-item text-black"
                  placeholder="Product Title"
                />
              </div>
              <div className="indicator">
                <button onClick={handleSearch} className="btn join-item">
                  Search
                </button>
              </div>
            </div>
            <div className="navbar-end">
              {!user?.email ? (
                <div className="flex gap-4">
                  <Link to={"/login"} className="btn bg-purple-400 hover:bg-slate-600 text-black border-0">
                    Login
                  </Link>
                  <Link to={"/register"} className="btn bg-purple-400 hover:bg-stone-600 text-dark border-0">
                    Registration
                  </Link>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                      <img src={user.photoURL} alt="User Avatar" className="rounded-full" />
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                      <li>
                        <button className="btn bg-transparent border-0 shadow-transparent">
                          <Link to={'/profile'}>Profile</Link>
                        </button>
                      </li>
                      <li>
                        <button className="btn bg-transparent border-0 shadow-transparent" onClick={handleLogout}>
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Page content here */}
    </div>
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu bg-base-200 min-h-full w-80 p-4">
        {/* Sidebar content here */}
        <li><Link to={'/'}>Home</Link></li>
             <li><Link to={'/products'}>Products</Link></li>
             <li><Link to={'/dashboard'}>Dashboard</Link></li>
             {/* <li>
               <div className="join active:bg-transparent py-0 gap-0">
                 <div>
                   <div>
                     <input onInput={(e) => setSearch(e.target.value)} className="input input-bordered join-item text-black" placeholder="Product Title" />
                   </div>
                 </div>
                 <div className="indicator">
                   <button onClick={handleSearch} className="btn join-item">Search</button>
                 </div>
               </div>
             </li> */}
      </ul>
    </div>
  </div>
  

    // <div className="navbar text-white bg-purple-900">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    //       </div>
    //       <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-purple-400 rounded-box">
    //         <li><Link to={'/'}>Home</Link></li>
    //         <li><Link to={'/products'}>Products</Link></li>
    //         <li><Link to={'/dashboard'}>Dashboard</Link></li>
    //         <li>
    //           <div className="join active:bg-transparent py-0 gap-0">
    //             <div>
    //               <div>
    //                 <input onInput={(e) => setSearch(e.target.value)} className="input input-bordered join-item text-black" placeholder="Product Title" />
    //               </div>
    //             </div>
    //             <div className="indicator">
    //               <button onClick={handleSearch} className="btn join-item">Search</button>
    //             </div>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //     <a className="btn btn-ghost lg:text-xl text-sm ">TechHUB</a>
    //   </div>
    //   <div className="navbar-center hidden lg:flex ">
    //     <ul className="menu menu-horizontal px-1 lg:items-center gap-0 ">
    //       <li><Link to={'/'}>Home</Link></li>
    //       <li><Link to={'/products'}>Products</Link></li>
    //       <li><Link to={'/dashboard'}>Dashboard</Link></li>
    //       <li>
    //         <div className="join active:bg-transparent py-0 gap-0">
    //           <div>
    //             <div>
    //               <input onInput={(e) => setSearch(e.target.value)} className="input input-bordered join-item text-black" placeholder="Product Title" />
    //             </div>
    //           </div>
    //           <div className="indicator">
    //             <button onClick={handleSearch} className="btn join-item">Search</button>
    //           </div>
    //         </div></li>
    //     </ul>
    //   </div>
    //   <div className="navbar-end">
    //     {!user?.email ? (
    //       <div className="navbar-end flex gap-4">
    //         <Link to={"/login"} className="btn bg-purple-400 hover:bg-slate-600 text-black border-0">
    //           Login
    //         </Link>
    //         <Link to={"/register"} className="btn bg-purple-400 hover:bg-stone-600 text-dark border-0">
    //           Registration
    //         </Link>
    //       </div>
    //     ) : (
    //       <div className="navbar-end flex items-center gap-4">
    //         <div className="dropdown dropdown-end">
    //           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

    //             <img src={user.photoURL} alt="User Avatar" className="rounded-full" />

    //           </div>
    //           <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
    //           <li><button className="btn bg-transparent border-0 shadow-transparent">
    //               <Link to={'/profile'}>Profile</Link>
    //             </button></li>
    //             <li><button className="btn bg-transparent border-0 shadow-transparent" onClick={handleLogout}>
    //               Logout
    //             </button></li>
    //           </ul>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};

export default Navbar;