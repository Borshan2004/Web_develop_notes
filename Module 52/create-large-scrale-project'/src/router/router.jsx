import { createBrowserRouter } from "react-router";
import Homelayout from "../Layouts/Homelayout";
import Home from "../Pages/home";
import Catagory from "../Pages/Catagory";
import Catagories from "../Pages/Catagories";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Homelayout></Homelayout>,
        children:[
            {
                path:"",
                element:<Home></Home>
            },
            {
                path:"/catagory/:id",
                element:<Catagories></Catagories>

            }
        ]

    },
    {
        path: "/auth",
        element: <div>for the auth</div>
    }
    , {
        path: "/news",
        element: <div>for the news</div>
    }
    , {
        path: "/*",
        element: <div>error</div>
    }
]);

export default router;