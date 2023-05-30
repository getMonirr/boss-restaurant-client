import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layouts/Dashboard";
import ManageItems from "../Pages/Dashboard/Admin/ManageItems/ManageItems";
import MyCart from "../Pages/Dashboard/Users/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "our-menu",
        element: <OurMenu />,
      },
      {
        path: "our-shop/:category",
        element: <OurShop />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "all-users",
        element: <AllUsers />,
      },
      {
        path: "/dashboard",
        element: <h2>hi, welcome</h2>,
      },
      {
        path: "manage-items",
        element: <ManageItems />,
      },
      {
        path: "my-cart",
        element: <MyCart />,
      },
    ],
  },
]);

export default Routes;
