import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Product from "../Pages/Product/Product";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Profile/Profile";
import EditProfile from "../Pages/EditProfile/EditProfile";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch(`https://dummyjson.com/products`)
            },
            {
                path: '/products/:id',
                element:<Product></Product>,
                // loader:({params})=> fetch(`https://dummyjson.com/products${params}`)
            },
            {
                path: '/dashboard',
                element: <DashboardLayout></DashboardLayout>,
                children: [
                    {
                        path: 'dashboard',
                        element: <Dashboard></Dashboard>
                    },
                    {
                        path: 'dashboard/profile',
                        element: <Profile></Profile>
                    },
                    {
                        path: 'dashboard/editProfile',
                        element: <EditProfile></EditProfile>
                    }
                ]
          
            }
        ]
    }
])





export default myCreatedRoute;

// const myCreatedRoute = createBrowserRouter([
//     {
//         path: '/',
//         element: <MainLayout></MainLayout>,
//         children: [
//             {
//                 path: '/',
//                 element: <Home></Home>
//             },
//             {
//                 path: '/products',
//                 element: <Products></Products>
//             }
//         ]
//     }
// ])