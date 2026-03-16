import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Mainlayout from './Compound/Mainlayout.jsx';
import Userdeails from './Compounds/Userdeails.jsx';
import Update from './Compounds/Update.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component:Mainlayout,
    children:[
      {
        index:true,
        Component:App
      },
      {
        path:'users/:id',
        loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`),
        Component:Userdeails
      },
      {
        path:'update/:id',
        loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`),
        Component:Update
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
