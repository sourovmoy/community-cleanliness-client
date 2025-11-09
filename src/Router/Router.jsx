import { createBrowserRouter } from "react-router";
import HomeLayOut from "../Layout/HomeLayOut";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayOut,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);

export default router;
