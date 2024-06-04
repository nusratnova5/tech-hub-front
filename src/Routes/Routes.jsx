import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../component/Dashboard/Dashboard";
import AllProducts from "../component/AllProducts/AllProducts";
import AddProducts from "../component/AddProudcts/AddProducts";
import EditProduct from "../component/EditProduct/EditProduct";
import ProductDetails from "../component/ProductDetails/ProductDetails";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import MainLayout from "../Layouts/MainLayout";
import DashboardLayout from "../Layouts/DashboardLayout";

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
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home/>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute> <DashboardLayout /> </PrivateRoute>,
        children: [
            {
                path: "",
                element: <Dashboard />
            },
            {
                path: "add-products",
                element: <AddProducts />
            },
            {
                path: "all-products",
                element: <AllProducts />,
                loader: (() => fetch(`${import.meta.env.VITE_API_URL}/products`))
            },
            {
                path: "edit-product/:id",
                element: <EditProduct />,
                loader: (({params}) => fetch(`${import.meta.env.VITE_API_URL}/products/${params._id}`))
            },
            {
                path: "product-details/:id",
                element: <ProductDetails />,
                loader: (({params}) => fetch(`http://localhost:3000/shoes/${params.id}`))
            },
        ]
    },
]);
