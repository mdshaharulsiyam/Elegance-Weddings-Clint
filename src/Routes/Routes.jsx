import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from '../Pages/Root/Root';
import Errorelemt from './Errorelemt';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Gallery from '../Pages/Gallery/Gallery';
import Login from '../Pages/Login/Login';
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails';
import ContactPage from '../Pages/ContactPage/ContactPage';

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Root></Root>,
          errorElement:<Errorelemt></Errorelemt>,
          children: [
            {
              path: "/",
              element: <Home></Home>,
            },
            {
              path: "/about",
              element: <About></About>,
            },
            {
              path: "/gallery",
              element: <Gallery></Gallery>,
            },
            {
              path: "/login",
              element: <Login></Login>,
            },
            {
              path: "/Details",
              element: <ServiceDetails></ServiceDetails>,
            },
            {
              path: "/contact",
              element: <ContactPage></ContactPage>,
            },
            {
              path: "/venues",
              element: <ContactPage></ContactPage>,
            },
          ],
        },
      ]);



export default router
