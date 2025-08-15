import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const MainLayout = () => {
        const location = useLocation();
    
        useEffect(() => {
        window.scrollTo(0, 0);
        }, [location.pathname]);
    
    return (
        <div>
            <Header/>
            <Outlet/>
            <ToastContainer />
            <Footer/>
        </div>
    )
}

export default MainLayout