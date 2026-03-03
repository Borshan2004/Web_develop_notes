import { createBrowserRouter } from "react-router";
import Homelayout from "../Layouts/Homelayout";
import Home from "../Pages/home";
import Catagory from "../Pages/Catagory";
import Catagories from "../Pages/Catagories";
import Authlayout from "../Layouts/Authlayout";
import Login from "../Pages/Login";
import Registar from "../Pages/Registar";
import Newsdetails from "../Compounds/Newsdetails/Newsdetails";
import PrivateRoute from "../Authmanagement/PrivateRoute";
import Loading from "../Compounds/Loading/Loading";


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
                loader: () => fetch("/news.json"),
                hydrateFallbackElement: <Loading type="dots" size="lg" color="secondary"></Loading>

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
        path: "/news/:id",
        element: (
            <PrivateRoute>
                <Newsdetails></Newsdetails>
            </PrivateRoute>
        )
        ,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading type="dots" size="lg" color="secondary"></Loading>
    }
    , {
        path: "/*",
        element: <div>error</div>
    }
]);

export default router;