import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout/Layout";

const RouteList = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouteList;
