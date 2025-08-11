import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import HomePage from './Pages/HomePage'
import PrivacyPage from './Pages/PrivacyPage'
import TermsPage from './Pages/TermsPage'
import GeoPage from './Pages/GeoPage'
import LSPage from './Pages/LSPage'
import GeoQPage from './Pages/GeoQPage'
import GeoQPage2 from './Pages/GeoQPage2'
import LSQPage from './Pages/LSQPage'
import LSQPage2 from './Pages/LSQPage2'
import QuizPage from './Pages/QuizPage'
import GenChoosePage from './Pages/GenChoosePage'
import QuizEnginePage from './Pages/QuizEnginePage'


const App = () => {
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/Home' element={<HomePage/>}/>
        <Route path='/LS' element={<LSPage/>}/>
        <Route path='/Geo' element={<GeoPage/>}/>
        <Route path='/GeoQ' element={<GeoQPage/>}/>
        <Route path='/GeoQ2' element={<GeoQPage2/>}/>
        <Route path='/LSQ' element={<LSQPage/>}/>
        <Route path='/LSQ2' element={<LSQPage2/>}/>
        <Route path='/GenChoose1' element={<GenChoosePage/>}/>
        <Route path='/Quiz/:id' element={<QuizPage/>}/>
        <Route path='/QuizEngine' element={<QuizEnginePage/>}/>
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