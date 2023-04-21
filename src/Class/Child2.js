
import React from "react";


class Child2 extends React.Component{

    render(){

        const {name,place}=this.props

        return(

            <div className="pt-5">
           
                <h1> { place}Child22222 {name}</h1>
            </div>
        )
    }
}


export default Child2