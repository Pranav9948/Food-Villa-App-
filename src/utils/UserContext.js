import { createContext } from "react";

const userContext=createContext(
     {

        name:'dummyname@gmail.com',
        email:'dummyEmail@gmail.com'
    }
)


export default userContext