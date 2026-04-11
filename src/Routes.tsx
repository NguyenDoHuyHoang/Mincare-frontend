import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ListBlog from "./pages/Blog/ListBlog";
import Shopping from "./pages/Shop/Shoping";
import BookShop from "./pages/Shop/BookShop";
import CourseShop from "./pages/Shop/CourseShop";
import CoachList from "./pages/Coach/CoachList";
import Contact from "./pages/Contact/Contact";

import Blog from "./pages/Blog/BlogDetail";
import CoachDetail from "./pages/Coach/CoachDetail";
import BookDetail from "./components/shoping/ProductDetail/BookDetail";
import CourseDetail from "./components/shoping/ProductDetail/CourseDetail";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/Login/ForgotPassWordPage";


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
          element: <Shopping />,
        },
        {
          path: "books",
          element: <BookShop />,
        },
        {
          path: "books/:id",
          element: <BookDetail />,
        },
        {
          path: "courses",
          element: <CourseShop />,
        },
        {
          path: "courses/:id",
          element: <CourseDetail />,
        },
        {
          path: "coach",
          element: <CoachList />,
        },
        { path: "coach/:id", element: <CoachDetail /> },
        {
          path: "contact",
          element: <Contact/>
        },
        {
          path: "login",
          element: <Login/>
        },
        {
          path: "forgotPassword",
          element: <ForgotPassword/>
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
