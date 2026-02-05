import { createBrowserRouter } from "react-router";
import Roots from "../Roots/Roots";
import MiddleSection from "../Compounds/MiddleSection/MiddleSection";
import EachLayer from "../Compounds/MiddleSection/LayerMember/EachLayer/EachLayer";

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


    ]
  },
]);