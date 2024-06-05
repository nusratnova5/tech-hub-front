import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../component/Dashboard/Dashboard";
import AllProducts from "../component/AllProducts/AllProducts";
import AddProducts from "../component/AddProudcts/AddProducts";
import EditProduct from "../component/EditProduct/EditProduct";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import MainLayout from "../Layouts/MainLayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import Products from "../component/Home/Products/Products";
import ProductDetails from "../component/Home/Products/ProductDetails";
import axios from "axios";
import Profile from "../component/Profile/Profile";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/",
        element: <PrivateRoute> <MainLayout /> </PrivateRoute>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "product-details/:id",
                element: <ProductDetails />,
                loader: (async ({params}) => {
                    try {
                        const token = localStorage.getItem('token');
                        const headers = {
                            Authorization: `Bearer ${token}`
                        };
                        const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/${params.id}`, { headers });
                        return response.data;
                    } catch (error) {
                        console.error('Error fetching products:', error);
                        throw error; // Rethrow the error to handle it outside
                    }
                })
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/profile",
                element: <Profile />,
                loader: (async () => {
                    try {
                        const token = localStorage.getItem('token');
                        const userId = localStorage.getItem('userId');
                        const headers = {
                            Authorization: `Bearer ${token}`
                        };
                        const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/${userId}`, { headers });
                        return response.data;
                    } catch (error) {
                        console.error('Error fetching products:', error);
                        throw error; // Rethrow the error to handle it outside
                    }
                })
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute> <DashboardLayout /> </PrivateRoute>,
        children: [
            {
                path: "",
                element: <Dashboard />,
                loader: (async () => {
                    try {
                        const token = localStorage.getItem('token');
                        const headers = {
                            Authorization: `Bearer ${token}`
                        };
                        const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/dashboard-data`, { headers });
                        return response.data;
                    } catch (error) {
                        console.error('Error fetching products:', error);
                        throw error; // Rethrow the error to handle it outside
                    }
                })
            },
            {
                path: "add-products",
                element: <AddProducts />
            },
            {
                path: "all-products",
                element: <AllProducts />
            },
            {
                path: "edit-product/:id",
                element: <EditProduct />,
                loader: (async ({ params }) => {
                    try {
                        // Retrieve token from localStorage
                        const token = localStorage.getItem('token');

                        // Create headers object with Authorization header containing the token
                        const headers = {
                            Authorization: `Bearer ${token}`
                        };

                        // Make GET request to fetch products with headers containing the token
                        const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/${params.id}`, { headers });

                        return response.data; // Return the fetched products
                    } catch (error) {
                        console.error('Error fetching products:', error);
                        throw error; // Rethrow the error to handle it outside
                    }
                })
            }
        ]
    },
]);
