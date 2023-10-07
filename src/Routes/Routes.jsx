import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from '../Pages/Root/Root';
import Errorelemt from './Errorelemt';
import Home from '../Pages/Home/Home';

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
          ],
        },
      ]);



export default router
