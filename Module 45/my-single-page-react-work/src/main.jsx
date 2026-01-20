import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from './Componets/Roots/Roots.jsx';
import Home from './Componets/Home/Home.jsx';
import Mobile from './Componets/Mobile/Mobile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Roots,
    children: [
      {index: true, Component: Home},
      {path: "mobile", Component: Mobile}

    ]
  },
  {

    path: "blog",
    element: <div>Blog Page here is every blog written</div>,
  },
  {

    path:"app",
    Component: App,

  },
  {

    path :"app2",
    element: <App />,

  },

]);   



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
