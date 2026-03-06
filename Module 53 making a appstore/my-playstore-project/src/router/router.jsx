import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayout from '../Layout/HomeLayout';
import Home from '../Pages/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                path: "",
                element: <Home></Home>,
                loader: ()=> fetch("/appdata.json")
            },
        ]
    },
]);

export default router;