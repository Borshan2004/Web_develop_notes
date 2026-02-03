import { createBrowserRouter } from "react-router";
import Roots from "../Roots/Roots";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
  },
]);