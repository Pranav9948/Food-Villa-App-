import React from 'react'
import './RestuarantCard.css'

const RestuarantCard = ({name,cuisines,area,cost,cloudinaryImageId,keys}) => {


   console.log("okk",keys);

         return (
                    
                    <div className='RestuarantCardz ms-5'>
                    <div className='cards' keys={keys}>
                    <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} alt='foodImage'  ></img>

                  

                   <div className='cardDescription mt-3'>

                    <h2 className='mt-4 fw-bold'>{name.substring(0,15)}</h2>
                    <h5 className='mt-4'>{cuisines}</h5>
                    <h6 className='mt-4 fw-bold'>{area}</h6>
                    <h6 className='mt-4'>{cost}</h6>
                <button className='mt-4' >Add to Cart</button>      
              </div>
              </div>
              </div>
 

  )
}

export default RestuarantCard
