import React, { useState } from "react";
import '../Navbars/Navbars.css'

const Navbars=()=>{


  const [loggedIn,SetLoggedIn]=useState(false)

  return(

    <>

   <div className="navbars">

    <div className="navLogo">

        <img src="https://images-platform.99static.com/tpywLkUbmedgOYoqY3s3jWROcnc=/233x31:979x777/500x500/top/smart/99designs-contests-attachments/134/134511/attachment_134511769" alt="navbarLogo" className="goForFoodLogo"/>


    </div>

    <div className="menuItems">

      <ul>
        <li className="items">Home</li>
        <li className="items">About</li>
        <li className="items">Contact</li>
        <li className="items">Cart</li>


        {loggedIn ? (
  <li className="items" onClick={() => SetLoggedIn(false)}>
    logout
  </li>
) : (
  <li className="items" onClick={() => SetLoggedIn(true)}>
    login
  </li>
)}


      </ul>


    </div>




  </div>
  
  
    </>
  )

}


export default Navbars
