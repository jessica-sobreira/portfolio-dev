import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/HomeThis";
import { Aboutme } from "../pages/About";
import { Project } from "../pages/Projects";
import { TextMe } from "../pages/Contact";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/aboutme",
      element: <Aboutme />,
    },
    {
        path: "/projects",
        element: <Project />,
      },
    {
        path: "/contact",
        element: <TextMe />,
      }


  ]);