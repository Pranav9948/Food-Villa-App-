import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainBody from './components/MainBody/MainBody'
import About from './components/AboutUs/AboutUs'
import Contact from './components/Contactus/ContactUs'
import Navbars from './components/Navbars/Navbars'
import ErrorPage from './components/ErrorPage/ErrorPage'
import HotelMenu from './components/HotelMenu/HotelMenu'
import Login from './LoginPage/Login'
import Cart from './Cart/Cart'
import Shimmer from './components/shimmer/Shimmer'
import Context from './components/context/Context'


const Routers = () => {


  return (

    <div>

<Routes>
      <Route
        path="/"
        element={
          
            <>
           
            <MainBody/> 
            </> 
          
        }
      />



<Route
        path="/hotelMenu/:id"
        element={
          
            <>
           
            <HotelMenu/> 
            </> 
          
        }
      />


<Route
        path="/cart"
        element={
          
            <>
           
           <Suspense fallback={<Shimmer/>}>
            <Cart/> 
            </Suspense>
            </> 
          
        }
      />



      
      <Route
        path="/about"
        element={
        
            <>
              
            
            <About/>
         
            </>
         
        }
      />



   <Route
        path="/contact"
        element={
        
            <>
             
            <Contact/>
           
            </>
         
        }
      />




<Route
        path="/context"
        element={
        
            <>
             
            <Context/>
           
            </>
         
        }
      />


<Route
        path="/login"
        element={
        
            <>
             
            <Login/>
           
            </>
         
        }
      />











<Route
        path="*"
        element={
        
            <>
              
            
            <ErrorPage/>
         
            </>
         
        }
      />




      </Routes>
      
    </div>

  )
}

export default Routers


