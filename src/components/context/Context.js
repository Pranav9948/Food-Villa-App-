import React, { useState } from 'react'
import './context.css'

function Context() {


    const Accordians=({title,contents,shows,setShows})=>{

       
        

        return(

        <div className='accordian'>

            <h1>{title}</h1>

           {
              shows && 
         <p>{contents}</p>

           }

         

     <button onClick={()=>setShows(!shows)}>Show/Hide</button>
             

            



        </div>

        )
    }

   


    const [visibleContent,setVisibleContent]=useState('about')
   

  return (

    <div  className='context'>

        <Accordians title={'learn Html'}  contents={'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript'} shows={visibleContent==='about'}  />
   
        <Accordians title={'learn Css'}  contents={'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript'} shows={visibleContent==='abouts'} />

        <Accordians title={'learn Javascript'}  contents={'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript'} shows={visibleContent} setShows={()=>setVisibleContent('about')}/>
   
    
    </div>

    
  )
}

export default Context