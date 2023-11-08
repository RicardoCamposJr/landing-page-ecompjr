import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Navbar from "../components/header/Navbar"
import SignUp from "../pages/SignUp"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [{
            index: true,
            element: <Home />
        }]  
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signUp",
        element: <SignUp />
    }
])

export default router