import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from './Componets/Roots/Roots.jsx';
import Home from './Componets/Home/Home.jsx';
import Mobile from './Componets/Mobile/Mobile.jsx';
import Users from './Componets/Users/Users.jsx';
import Users2 from './Componets/Users2/Users2.jsx';
import UserDetails from './Componets/UserDetails/UserDetails.jsx';
import Posts from './Componets/Posts/Posts.jsx';
import Postdetails from './Componets/Postdetails/Postdetails.jsx';


const data = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component:Roots,
    children: [
      {index: true, Component: Home},
      {path: "mobile", Component: Mobile},
      {path: "users",loader: () => fetch('https://jsonplaceholder.typicode.com/users'), Component: Users},
      {path: "users2",
        element: <Suspense fallback={<div>Loading...</div>}>
                    <Users2 data={data}>

                    </Users2>
                 </Suspense>
      },
      {
        // '/:' this is used for the dynameic route
        path: "users/:userId",
        //here the perams is used to get the dynamic id from the url and it is the id number that i am geting by clicking the details link button 
        //it is like variable
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component:UserDetails
      },
      {
        path: "posts",
        loader: () =>fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      {
        path: "posts/:postId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: Postdetails
      }

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
