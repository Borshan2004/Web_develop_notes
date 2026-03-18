import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Mainlayout from './Layout/Mainlayout.jsx';
import Home from './Compound/Home.jsx';
import Addcoffe from './Compound/Addcoffe.jsx';
import Updatecoffe from './Compound/Updatecoffe.jsx';
import Readindetials from './Compound/Readindetials.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      {
        index: true,
        Component: Home,
        loader:()=>fetch('http://localhost:3000/coffes').then(res=>res.json())
      },
      {
        path: 'addcoffe',
        Component: Addcoffe

      },
      {
        path:'/coffes/:id',
        Component: Readindetials

      },
      {
        path: '/updatecoffe/:id',
        loader:({params})=>fetch(`http://localhost:3000/coffes/${params.id}`),
        Component: Updatecoffe
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
