import { Router, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../Login";
import Register from "../pages/Register";
import AddToy from "../pages/AddToy";
import AllToys from "../pages/AllToys";
import Blogs from "../pages/Blogs";
import MyToys from "../pages/MyToys";
import UpdateSingleToy from "../pages/UpdateSigngleToy";
import ErrorPage404 from "../pages/ErrorPage404";
import SingleToyDetail from "../pages/SingleToyDetail";
import PrivateRoute from "../providers/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage404></ErrorPage404>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/addToy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path:'/myToys',
                element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path:'/allToys',
                element:<AllToys></AllToys>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path:'/updateSingleToy/:id',
                element: <UpdateSingleToy></UpdateSingleToy>,
                loader: ({params})=>fetch(`https://y-ecru-tau.vercel.app/toy/${params.id}`)
            }
        ]
    },
    {
        path:'/login',
        element: <Login></Login>,
        errorElement: <ErrorPage404></ErrorPage404>
    },
    {
        path: '/register',
        element: <Register></Register>,
        errorElement: <ErrorPage404></ErrorPage404>
    },
    {
        path:'single-toy',
        errorElement: <ErrorPage404></ErrorPage404>,
        children: [
            {
                path: ':id',
                element:<PrivateRoute><SingleToyDetail></SingleToyDetail></PrivateRoute>,
                loader: ({params}) => fetch(`https://y-ecru-tau.vercel.app/toy/${params.id}`)
                .then(res => res.json())
            }
        ]
    }
]);

export default router;