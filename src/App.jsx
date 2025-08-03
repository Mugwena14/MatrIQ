import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import HomePage from './Pages/HomePage'


const App = () => {
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
      </Route>
    )
  )

    return (
        <div>
          <RouterProvider router={router}/>
        </div>
    )
}

export default App