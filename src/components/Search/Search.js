import React, { useState } from 'react'
import './search.css'

function Search({getSearchData}) {


    const [hotel,setHotel]=useState('')


    const handleClick=()=>{

        console.log("234",hotel)

        getSearchData(hotel)
    }



  return (


    <div className="search-Container">

    <div className="search-input">

      <input type="text"  onChange={(e)=>setHotel(e.target.value)} />


    </div>


    <div className="search-button ms-3">

      <button type='submit' onClick={handleClick}>Search </button>

    </div>



   </div>

  )
}

export default Search
