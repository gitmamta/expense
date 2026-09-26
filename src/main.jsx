
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout/Layout.jsx";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/auth/Login/login.jsx";
import Register from "./pages/auth/Register/register.jsx";
import Add from "./pages/add/Add.jsx";
import Update from "./pages/Update/update.jsx";
import Footer from "./components/footer/Footer.jsx";
import ViewExpense from "./pages/viewExpense/ViewExpense.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index:true,
        element: <Login />,
      },
      {
        path:"home",
        element:<Home/>
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "update/:id",
        element: <Update />,
      },
      {

        path:"view",
        element:<ViewExpense /> 
      }
      ,

      {
        path: "footer",
        element: <Footer />,
      },
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
