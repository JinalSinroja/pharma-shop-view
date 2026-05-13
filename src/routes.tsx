import { createBrowserRouter, RouterProvider } from "react-router";

const RouteList = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div></div>,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouteList;
