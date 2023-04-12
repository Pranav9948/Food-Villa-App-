import React, { useEffect, useState } from "react";
import RestuarantCard from "../RestuarantCard/RestuarantCard";
import "./MainBody.css";
import {restaurantList} from '../Config/config'
import Search from "../Search/Search";
import {SWIGGY_API, swiggy_api_URL} from '../../constants/constant'
import Shimmer from "../shimmer/Shimmer";
import SearchFail from "../SearchFail";

const MainBody = () => {

  const [searchName,setSearchName]=useState('')
  const [restaurantListsApi,setRestaurantListsApi]=useState([])

console.log("456",restaurantListsApi)

 function getSearchData(data){

  setSearchName(data)

  console.log('345',searchName)

    const list=restaurantListsApi.filter((hotel)=>{ 


      console.log("333", hotel.data.name)
        return  hotel.data.name.toLowerCase().includes(searchName.toLowerCase())
           
    })


    if (list.length === 0) {
      console.log('offf')
      setRestaurantListsApi("empty")
       

    } else {
      setRestaurantListsApi(list)
    }
  }

       
       
       
 


   useEffect(()=>{

     getApiData()
       
   },[])

   


   const getApiData=async()=>{

      try{

        const data=await fetch(SWIGGY_API)

        const json= await data.json()

    console.log("123",json);

        const mainData=json.data.success.cards[0].favourite.cards

        setRestaurantListsApi(mainData)

        console.log("mhh",mainData)

      }

      catch(err){

        console.log('error',err)
      }
   }





  return (


    <>

    <div className="searchField" >

    <Search  getSearchData={getSearchData}/>

    </div>

    
    

  

   
     {  restaurantListsApi==="empty" ?  <SearchFail/>:      restaurantListsApi.length >0 ? 
  

      
        
    <div className="mainBody">

      { restaurantListsApi.map((datas) => {
        

        return <RestuarantCard {...datas.data} key={datas.data.parentId}/>;
      }) }


     

    </div>

    

    :    <Shimmer/>  }



  



    </>

    
  );
};

export default MainBody; 
