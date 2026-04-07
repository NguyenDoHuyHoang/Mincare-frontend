import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ListBlog from "./pages/Blog/ListBlog";
import Shopping from "./pages/Shop/Shoping";

import Blog from "./pages/Blog/BlogDetail";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about-us",
          element: <AboutUs />,
        },
        {
          path: "blog",
          element: <ListBlog />,
        },
        {
          path: "blog/:id",
          element: <Blog />,
        },
        {
          path: "shopping",
          element: <Shopping/>
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
