import { createBrowserRouter } from "react-router";
import Roots from "../Roots/Roots";
import MiddleSection from "../Compounds/MiddleSection/MiddleSection";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children:[
        {
            index:true,
            path:"/",
            loader: ()=> fetch('lawyerinfo.json'),
            Component:MiddleSection
        },
        

    ]
  },
]);