import React, { useState } from 'react'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from './componant/layot/Layout'
import Move from './componant/move/Move'
import Eat from './componant/eat/Eat'
import TV from './componant/tv/TV'
import Home from './componant/Home/Home'
import ContextProvider from './context/ContextProvider'

export default function App() {
 let routers =  createHashRouter( [{
    path: "/", element: <Layout/>, children: [
     { path: "move", element: <Move /> },
     { path: "eat", element: <Eat /> },
    { path: "tv", element: <TV/> },
    { index:true, element: <Home/> },
    ]
  }])
  return  <ContextProvider>
    <RouterProvider router={routers} />

  </ContextProvider>

}
