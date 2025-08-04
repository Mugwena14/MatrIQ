import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import HomePage from './Pages/HomePage'
import PrivacyPage from './Pages/PrivacyPage'
import TermsPage from './Pages/TermsPage'
import LSPage from './Pages/LSPage'


const App = () => {
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/Home' element={<HomePage/>}/>
        <Route path='/LS' element={<LSPage/>}/>
        <Route path='/Privacy' element={<PrivacyPage/>}/>
        <Route path='/Terms' element={<TermsPage/>}/>
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