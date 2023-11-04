import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import myCreatedRoute from './Route/Route'

// const myCreatedRoute = createBrowserRouter([
//   {
//     path:'/',
//     element: <div>this is my 1st route</div>
//   },
//   {
//     path:'/products',
//     element: <div>this is product</div>
//   },
//   {
//     path:'/about',
//     element: <div>this is about</div>
//   }
// ])
// const myCreatedRoute = createBrowserRouter([
//   {
//     path: '/',
//     element: <section>
//       <div>this is a fixed item</div>
//       <Outlet></Outlet>
//     </section>,
//     children: [
//       {
//         path: '/',
//         element: <div>This is home route</div>
//       },
//       {
//         path: '/products',
//         element: <div>This is productssss route</div>
//       }
//     ]
//   }
// ])
// const myCreatedRoute = createBrowserRouter([
//   {
//     path: '/',
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: '/',
//         element: <Home></Home>
//       },
//       {
//         path: '/products',
//         element: <Products></Products>
//       }
//     ]
//   }
// ])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
