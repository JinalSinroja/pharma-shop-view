import { createBrowserRouter, RouterProvider } from "react-router"

const RouteList = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <div>Home</div>
        }
    ])
    return <RouterProvider router={router} />
}

export default RouteList