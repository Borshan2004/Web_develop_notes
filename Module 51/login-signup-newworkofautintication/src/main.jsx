import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from './Layout/Roots.jsx';
import Home from './Compound/Home/Home.jsx';
import Registar from './Compound/Registar/Registar.jsx';
import Login from './Compound/Login/Login.jsx';
import AuthProvider from './context/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/registar',
        Component: Registar
      },
      {

        path: '/home',
        Component: Home
      },
      {
        path: '/login',
        Component: Login

      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>


  </StrictMode>,
)
