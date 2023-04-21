
import React from "react";


class Child1 extends React.Component{

    constructor(props){

        super(props)

        this.state={

            count:0,
            count1:0,
            count2:0
        }

        console.log("contructor called")
    }


    componentDidMount(){


    
    }


    componentDidUpdate(){

        console.log("component did UPDATEEEEEEEEEE.......")
    }


    componentWillUnmount(){

        console.log("component will unmount.......")

        clearInterval(this.timer)


    }


    render(){


        console.log("rendering")

        const {name,place}=this.props

        const {count,count1,count2}=this.state

        return(

            <div className="pt-5">
                <h1> {place} Child1 {count} 1111 {name}</h1>
                <h2>count : {count} <br></br>   count1 : {count1} <br></br> count2 : {count2} <br></br>      </h2>
                <button onClick={()=>this.setState({count:count+1,count1: count1+2, count2:count2+3})}>Click me</button>
            </div>
        )
    }
}


export default Child1