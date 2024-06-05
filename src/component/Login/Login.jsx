import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase.config';
import axios from 'axios';

const Login = () => {
    const [signInWithGoogle, googleuser, googleLoading] = useSignInWithGoogle(auth);

    const handleGoogleLogin = async () => {
        await signInWithGoogle();
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const handleSignIn = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const res = await signInWithEmailAndPassword(email, password);
        if (res.user) {
            getToken(res.user.email);
        }
    }
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || googleuser) {
            navigate(from, { replace: true });
        }

        if (googleuser) {
            saveGoogleUser(googleuser);
        }
    }, [user, loading, navigate, from, googleuser, googleLoading]);

    const getToken = async (email) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, { email });
            if (response.data.acknowledged) {
                const token = response.data.token;
                const userId = response.data.user._id;
                const displayName = response.data.user.displayName;
                const photoURL = response.data.user.photoURL;
                
                // Save token and user ID to localStorage
                localStorage.setItem('token', token);
                localStorage.setItem('userId', userId);                
                localStorage.setItem('displayName', displayName);                
                localStorage.setItem('photoURL', photoURL);                
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    const saveGoogleUser = async (googleuser) => {
        try {
            const userData = { 
                displayName: googleuser.displayName,
                photoURL: googleuser.photoURL,
                email: googleuser.email
            };
            await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, userData);
            console.log('User created successfully:', response.acknowledged);
        } catch (error) {
            console.error('Error creating user:', error.response ? error.response.data : error.message);
        } finally {
            await getToken(googleuser.email);
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-purple-900">Login now!</h1>
                    <p className="py-6">Sign in to unlock a personalized experience at our tech accessories shop. Explore your order history, save your favorite gadgets, and enjoy swift, secure checkouts. Elevate your tech game with ease!</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body pb-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" defaultValue={'test@gmail.com'} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" defaultValue={'123456'} className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-purple-900 hover:bg-slate-700 text-white font-bold">Login</button>
                        </div>
                    </form>
                    <div className="form-control mx-7 mb-3 ">
                        <button onClick={handleGoogleLogin} className="btn bg-purple-400 hover:bg-stone-700 text-dark font-bold">Google</button>
                    </div>
                    <div className='mx-7 mb-3'>
                        <p>Don't have any account? <Link to={'/register'} className='text-purple-900 font-bold'>Click here </Link>to register.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;