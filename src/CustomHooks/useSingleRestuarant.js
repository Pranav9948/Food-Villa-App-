
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useSingleRestuarant = () => {


    const params = useParams();
    const [menuItems, setMenuitems] = useState({});
  
    const { id } = params;
  
    useEffect(() => {
      getHotelMenu();
    }, []);
  
    const getHotelMenu = async () => {
      const response =
        await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=8.4320632&lng=77.0502803&restaurantId=${id}
         &submitAction=ENTER`);
  
      const jsondata = await response?.json();
  
      
  
      setMenuitems(jsondata?.data?.cards[0]?.card?.card?.info);
    };
  






  return  menuItems
}

export default useSingleRestuarant
