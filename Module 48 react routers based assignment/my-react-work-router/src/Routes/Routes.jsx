import { createBrowserRouter } from "react-router";
import Roots from "../Roots/Roots";
import MiddleSection from "../Compounds/MiddleSection/MiddleSection";
import EachLayer from "../Compounds/MiddleSection/LayerMember/EachLayer/EachLayer";
import Appoinmentlist from "../Compounds/MiddleSection/LayerMember/Appoinmentlist/Appoinmentlist";
import BlogPage from "../Compounds/Blogpage/Blogpage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      {
        index: true,
        path: "/",
        loader: async () => {
          const res = await fetch('/lawyerinfo.json');
          return res.json();
        },
        Component: MiddleSection
      },
      {
        path: "/eachlayer/:id",
        loader: async () => {
          const res = await fetch('/lawyerinfo.json');
          return res.json();
        },
        Component: EachLayer
      },
      {

        path: "/appointmentlist",
        loader: async () => {
          const res = await fetch('/lawyerinfo.json');
          return res.json();
        },
        Component: Appoinmentlist
      },
      {

        path:"/blogpage",
        Component:BlogPage

      },


    ]
  },
]);