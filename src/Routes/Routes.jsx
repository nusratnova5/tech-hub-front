import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/Layouts/MainLayout";
import Home from "../component/Home/Home";

export const router = createBrowserRouter([
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
]);
