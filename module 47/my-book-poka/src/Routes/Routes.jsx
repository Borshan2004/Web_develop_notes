import React from 'react';

import { createBrowserRouter } from "react-router";
import Roots from '../Pages/Roots/Roots';
import Errorpage from '../Pages/Errorpage/Errorpage';
import Home from '../Pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Roots,
    errorElement:<Errorpage></Errorpage>,
    children:[{
        index:true,
        loader:()=>fetch("booksData.json"),
        path:"/",
        Component:Home,
    }]
  },
]);