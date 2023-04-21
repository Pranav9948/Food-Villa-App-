import React from 'react'
import { useSelector } from 'react-redux'
import { clearItem, removeItem } from '../Slices/CartSlice'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './cart.css'

const Cart = () => {


  const foodItems=useSelector((state)=>state.cart.item)

  const dispatch=useDispatch()

  console.log("234",foodItems)


  return (


    <div className='cartFood'>


<button className='mr-3' onClick={()=>dispatch(clearItem())}>CLear Cart</button>
    
    


    <div className="d-flex">

     
      {

      

     foodItems?.map((item)=>{

       console.log("okkmo",item)

       return(



        <div className='RestuarantCardz ms-5'>
        <div className='cards' keys={item.keys}>
        <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item.cloudinaryImageId}`} alt='foodImage'  ></img>
    
      
    
       <div className='cardDescription mt-3'>
       <Link to={`/hotelMenu/${item.id}`}>  <h2 className='mt-4 fw-bold'>{item.name.substring(0,15)}</h2> </Link>
        <h5 className='mt-4'>{item.cuisines}</h5>
        <h6 className='mt-4 fw-bold'>{item.area}</h6>
        <h6 className='mt-4'>{item.cost}</h6>
    <Link to={'/cart'}> <button className='mt-4' onClick={()=>removeItem()} >Remove From Cart</button>      </Link>
    </div>
    </div>
    </div>

    

      )
    })

      }
                    
   </div>
   </div>

)
}

export default Cart
