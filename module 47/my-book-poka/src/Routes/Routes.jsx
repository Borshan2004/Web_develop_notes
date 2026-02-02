import React from 'react';

import { createBrowserRouter } from "react-router";
import Roots from '../Pages/Roots/Roots';
import Errorpage from '../Pages/Errorpage/Errorpage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';

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
    },
    {
      path:"/about",
      Component:About,
    },
    {
      path:"/bookdetails/:bookId",
      loader:()=>fetch("booksData.json"),
      Component:BookDetails, 
    }

  ]
  },
]);