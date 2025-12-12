import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import AllScholarships from "../pages/AllScholarships/AllScholarships";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import SignIn from "../pages/Authentication/SignIn/SignIn";
import ForgotPassword from "../pages/Authentication/ForgotPassword/ForgotPassowrd";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ScholarshipDetails from "../pages/ScholarshipDetails/ScholarshipDetails";
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess";
import PaymentFail from "../pages/PaymentFail/PaymentFail";
import DashBoardLayout from "../layout/DashBoardLayout/DashBoardLayout";
import AddScholarship from "../pages/DashBoard/AddScholarship/AddScholarship";
import DashBoardHome from "../pages/DashBoard/DashBoardHome/DashBoardHome";
import UserProfile from "../pages/DashBoard/UserProfile/UserProfile";
import ManageScholarships from "../pages/DashBoard/ManageScholarships/ManageScholarships";
import EditScholarship from "../pages/DashBoard/ManageScholarships/EditScholarship/EditScholarship";
import ManageUsers from "../pages/DashBoard/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute/AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/scholarships",
        Component: AllScholarships,
      },
      {
        path: "/signUp",
        Component: SignUp,
      },
      {
        path: "/signIn",
        Component: SignIn,
      },
      {
        path: "/forgot-password",
        Component: ForgotPassword,
      },
      {
        path: "/scholarship/:id",
        element: (
          <PrivateRoute>
            <ScholarshipDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/success",
        element: (
          <PrivateRoute>
            <PaymentSuccess />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/fail",
        element: (
          <PrivateRoute>
            <PaymentFail />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        Component: DashBoardHome,
      },
      {
        path: "/dashboard/add-scholarship",
        element: (
          <AdminRoute>
            <AddScholarship />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-scholarships",
        element: (
          <AdminRoute>
            <ManageScholarships />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/edit-scholarship/:id",
        element: (
          <AdminRoute>
            <EditScholarship />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/me",
        Component: UserProfile,
      },
    ],
  },
]);
export default router;
