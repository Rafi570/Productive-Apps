import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Root from "../page/Root/Root";
import Apps from "../page/Apps/Apps";
import Home from '../page/Home/Home'
import Installetions from "../page/Install/Installetions";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
    {
      index:true,
      path:'/',
      Component: Home

    },
    {
      path: '/apps',
      loader: () => fetch("/appsData.json"),
      Component:Apps
    },
    {
      path:'/installation',
      Component:Installetions

    }
  ],
  },
]);
