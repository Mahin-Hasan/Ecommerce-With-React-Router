import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Product from "../Pages/Product/Product";

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
                path: '/dashborad',
                element: <div>DashBoard</div>
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