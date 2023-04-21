import React from 'react'
import './RestuarantCard.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../Slices/CartSlice';

const RestuarantCard = ({datas}) => {

  console.log("451",datas)


    const dispatch=useDispatch()



         return (

          
             

                    
                  <div className='RestuarantCardz ms-5'>
                  <div className='cards' keys={datas.data.keys}>
                  <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${datas.data.cloudinaryImageId}`} alt='foodImage'  ></img>

                

                 <div className='cardDescription mt-3 ms-3'>

                 <Link to={`/hotelMenu/${datas.data.id}`}>  <h2 className='mt-4 fw-bold'>{datas.data.name?.substring(0,15)}</h2> </Link>
                  <h5 className='mt-4'>{datas.data.cuisines[0]}</h5>
                  <h6 className='mt-4 fw-bold'>{datas.data.area}</h6>
                  <h6 className='mt-4'>{datas.data.cost}</h6>
              <button className='mt-4' onClick={()=>dispatch(addItem(datas.data))} >Add to Cart</button>      
            </div>
            </div>
            </div>

             
          
 

  )
}

export default RestuarantCard
