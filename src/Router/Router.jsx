import { createBrowserRouter } from "react-router";
import HomeLayOut from "../Layout/HomeLayOut";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import AllIssues from "../Pages/AllIssues";
import AddIssues from "../Pages/AddIssues";
import MyIssues from "../Pages/Dashboard/User/MyIssues";
import MyContribution from "../Pages/Dashboard/User/MyContribution";
import ErrorPage from "../Pages/ErrorPage";
import IssueDetails from "../Pages/IssueDetails";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Terms from "../Pages/Terms";
import DashboardLayout from "../Layout/DashboardLayout";
import AdminRoute from "../PrivetRouter/AdminRoute";
import UserHome from "../Pages/Dashboard/User/UserHome";
import AdminHome from "../Pages/Dashboard/admin/AdminHome";
import ContributionDetails from "../Pages/Dashboard/admin/ContributionDetails";
import Profile from "../Pages/Profile";

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
    ],
  },
  {
    path: "/dashboard/user",
    element: (
      <PrivetRouter>
        <DashboardLayout />
      </PrivetRouter>
    ),
    children: [
      {
        index: true,
        element: <UserHome />,
      },
      {
        path: "/dashboard/user/my-issues",
        element: (
          <PrivetRouter>
            <MyIssues />
          </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/user/my-contribution",
        element: (
          <PrivetRouter>
            <MyContribution />
          </PrivetRouter>
        ),
      },
    ],
  },
  {
    path: "/dashboard/admin",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      {
        index: true,
        element: <AdminHome />,
      },
      {
        path: "/dashboard/admin/contributions",
        element: <ContributionDetails />,
      },
    ],
  },
  {
    path: "/profile",
    element: (
      <PrivetRouter>
        <Profile />
      </PrivetRouter>
    ),
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
