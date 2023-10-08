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
import ContactPage from '../Pages/ContactPage/ContactPage';
import SignUp from '../Pages/SignUp/SignUp';
import ServicesDetails from '../Pages/ServicesDetails/ServicesDetails';
import PrivetRoute from '../ProvetRoute/PrivetRoute';
import Cart from '../Pages/Cart/Cart';

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
              path: "/ServiceDetails/:id",
              element: <PrivetRoute><ServicesDetails></ServicesDetails></PrivetRoute>,
            },
            {
              path: "/cart",
              element: <PrivetRoute><Cart></Cart></PrivetRoute>,
            },
            {
              path: "/contact",
              element: <ContactPage></ContactPage>,
            },
            {
              path: "/venues",
              element: <ContactPage></ContactPage>,
            },
            {
              path: "/signup",
              element: <SignUp></SignUp>,
            },
          ],
        },
      ]);



export default router
