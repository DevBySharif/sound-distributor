import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout/Mainlayout";
import Error from "../assets/Pages/Error";
const Route = createBrowserRouter([
    {
        path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Error></Error>,
    }
])

export default Route;