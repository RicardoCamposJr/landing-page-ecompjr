import { createBrowserRouter } from "react-router-dom"
import Header from "../components/header/Header"
import About from "../components/About/About"
import Home from "../pages/Home"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
])

export default router