import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Root from "../page/Root/Root";
import Apps from "../page/Apps/Apps";
import Home from '../page/Home/Home'
import Installetions from "../page/Install/Installetions";
import AppDetails from "../page/AppDetails/AppDetails";
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
      path:"/appDetails/:id",
      loader: () => fetch("/appsData.json") ,
      Component:AppDetails
    },
    {
      path:'/installation',
      Component:Installetions

    }
  ],
  },
]);
