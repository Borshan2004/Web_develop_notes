import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayout from '../Layout/HomeLayout';
import Home from '../Pages/Home';
import Fullnewpage from '../Compound/Fullnewpage';
import Storelayout from '../Layout/Storelayout';
import LibaryLayout from '../Layout/LibaryLayout';
import ProfileLayout from '../Layout/ProfileLayout';
import Store from '../Pages/Store';
import Libary from '../Pages/Libary';
import LoginRegistarform from '../Layout/LoginRegistarform';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                path: "",
                element: <Home></Home>,
                loader: () => fetch("/appdata.json")
            },
            {
                path: "/catagory/:id",
                element: <Fullnewpage></Fullnewpage>,
                loader: () => fetch("/appdata.json")
            }
        ]

    },
    {
        path: "/store",
        element: <Storelayout></Storelayout>,
        children: [
            {
                index: true,
                path: "",
                element: <Store></Store>,
                loader: () => fetch("/appdata.json")
            }
        ]
    },
    {
        path: "/library",
        element: <LibaryLayout></LibaryLayout>,
        children: [
            {
                index: true,
                path: "",
                element: <Libary></Libary>,
                loader: () => fetch("/appdata.json")
            }
        ]

    },
    {
        path: "/profile",
        element: <ProfileLayout></ProfileLayout>
    }
    ,{
        path:"/auth",
        element: <LoginRegistarform></LoginRegistarform>,
        children: [
            {
                index: true,
                path: "login",
                element: <LoginPage></LoginPage>,
            },
            {
                path: "signin",
                element:<RegisterPage></RegisterPage>
            }
        ]
    }
]);

export default router;