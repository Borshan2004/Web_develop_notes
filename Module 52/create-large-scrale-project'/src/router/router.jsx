import { createBrowserRouter } from "react-router";
import Homelayout from "../Layouts/Homelayout";
import Home from "../Pages/home";
import Catagory from "../Pages/Catagory";
import Catagories from "../Pages/Catagories";
import Authlayout from "../Layouts/Authlayout";
import Login from "../Pages/Login";
import Registar from "../Pages/Registar";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Homelayout></Homelayout>,
        children: [
            {
                path: "",
                element: <Home></Home>
            },
            {
                path: "/catagory/:id",
                element: <Catagories></Catagories>,
                loader: () => fetch("/news.json")

            }
        ]

    },
    {
        path: "/auth",
        element: <Authlayout></Authlayout>,
        children: [
            {

                path: "login",
                element: <Login></Login>

            },
            {
                path: "registar",
                element: <Registar></Registar>
            }
        ]
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