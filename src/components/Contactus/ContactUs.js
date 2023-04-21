import React from "react";
import './contact.css'
import Child1 from "../../Class/Child1";
import Child2 from "../../Class/Child2";

const Contact=()=>{

    return(

        <div className="contact">
        <h1>Contact us</h1>
         <Child1 name={"pro"} place={"tvm"}/>
         <Child2 name={"MS"} place={"ranchi"}/>
        </div>
    )
}

export default Contact