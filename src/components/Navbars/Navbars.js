import React, { useContext, useState } from "react";
import '../Navbars/Navbars.css'
import { Link } from "react-router-dom";
import useOnline from "../../CustomHooks/useOnline";
import { useSelector } from "react-redux";
import store from "../../utils/store";
import userContext from "../../utils/UserContext";

const Navbars=()=>{


  const [loggedIn,SetLoggedIn]=useState(false)

  const fruits=useSelector((state=>state.cart.item))

  console.log("567",fruits)

  const online =useOnline()

  const {name}=useContext(userContext)

  console.log('math',name)

 

  console.log("navbar543",online)

  return(

    <>

   <div className="navbars">

    <div className="navLogo">

        <img src="https://images-platform.99static.com/tpywLkUbmedgOYoqY3s3jWROcnc=/233x31:979x777/500x500/top/smart/99designs-contests-attachments/134/134511/attachment_134511769" alt="navbarLogo" className="goForFoodLogo"/>


    </div>

    <div className="menuItems">

      <ul>
    

      <Link to={'/'} style={{ textDecoration: 'none'}}>
      <li className="items">Home</li>
    </Link>
    <Link to={'/about'} style={{ textDecoration: 'none' }}>
      <li className="items">About</li>
    </Link>
    <Link to={'/contact'} style={{ textDecoration: 'none' }}>
      <li className="items">Contact</li>
    </Link>

 <Link to={'/context'} style={{ textDecoration: 'none' }}>
      <li className="items">learn context</li>
    </Link>


    <Link to={'/cart'} style={{ textDecoration: 'none' }}>
      <li className="items">Cart</li>
    </Link>

    {
      online ? <li className="items">online</li> : <li className="items">offline</li>
    }


        {loggedIn ? (
     <Link to={'/logout'}><li className="items" onClick={() => SetLoggedIn(false)} style={{ textDecoration: 'none' }}>
    logout
    </li> </Link>
) : (
  <Link to={'/login'}><li className="items" onClick={() => SetLoggedIn(true)} style={{ textDecoration: 'none' }}>
    login
    </li></Link> 
)}


      </ul>


    </div>




  </div>
  
  
    </>
  )

}


export default Navbars
