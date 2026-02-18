import { createBrowserRouter } from "react-router";
import Homelayout from "../Layouts/Homelayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homelayout></Homelayout>,
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