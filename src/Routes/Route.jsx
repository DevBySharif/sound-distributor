import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout/Mainlayout";
import Error from "../assets/Pages/Error";
import Login from "../assets/Pages/Login";
const Route = createBrowserRouter([
    {
        path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Error></Error>,
    },
    {
        path: "/login",
        element: <Login></Login>,
      },
])

export default Route;