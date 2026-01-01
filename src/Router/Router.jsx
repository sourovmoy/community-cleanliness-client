import { createBrowserRouter } from "react-router";
import HomeLayOut from "../Layout/HomeLayOut";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import AllIssues from "../Pages/AllIssues";
import AddIssues from "../Pages/AddIssues";
import MyIssues from "../Pages/MyIssues";
import MyContribution from "../Pages/MyContribution";
import ErrorPage from "../Pages/ErrorPage";
import IssueDetails from "../Pages/IssueDetails";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Terms from "../Pages/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayOut,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/about-us",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/terms-and-conditions",
        Component: Terms,
      },
      {
        path: "/all-issues",
        element: <AllIssues />,
      },
      {
        path: "/all-issues/:id",
        element: <IssueDetails />,
      },
      {
        path: "/add-issues",
        element: (
          <PrivetRouter>
            <AddIssues />
          </PrivetRouter>
        ),
      },
      {
        path: "/my-issues",
        element: (
          <PrivetRouter>
            <MyIssues />
          </PrivetRouter>
        ),
      },
      {
        path: "/my-contribution",
        element: (
          <PrivetRouter>
            <MyContribution />
          </PrivetRouter>
        ),
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);

export default router;
