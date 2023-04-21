import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./hotelmenu.css";
import useSingleRestuarant from "../../CustomHooks/useSingleRestuarant";

const HotelMenu = () => {
  

      const  menuItems =useSingleRestuarant()

      console.log("nanban",menuItems)



  const {
    name,
    areaName,
    city,
    avgRating,
    costForTwoMessage,
    cloudinaryImageId,
  } = menuItems;

  console.log(
    "567",
    name,
    areaName,
    city,
    avgRating,
    costForTwoMessage,
    cloudinaryImageId
  );

  return (
    <div className="hotelMenu">
      <div className="container">
        <div className="row" style={{marginTop:'150px'}}>
          <div className="col-md-4">
            <img
              src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
            ></img>
          </div>

          <div className="col-md-2">

          </div>

          <div className="col-md-6 hotelDesc">
          

            <h1>{name}</h1>

            <h2>{areaName}</h2>

            <h3>{city}</h3>

            <h3> Rating : {avgRating}</h3>
            <h3>{costForTwoMessage}</h3>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HotelMenu;
