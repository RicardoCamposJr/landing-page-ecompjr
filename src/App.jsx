import { RouterProvider } from "react-router-dom"
import router from "../src/routers/router.jsx"

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
