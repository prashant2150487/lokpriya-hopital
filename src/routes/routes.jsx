import About from '@/pages/about'
import Home from '@/pages/home'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'



const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ])

export default router