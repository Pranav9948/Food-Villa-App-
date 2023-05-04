
import './App.css';
import Routers from './Routers';
import React ,{lazy, useState
} from 'react';
import userContext from './utils/UserContext';



  const Cart=lazy(()=>import('./Cart/Cart'))



function App() {


  const [user,setUser]=useState({name:"newUser",email:"pronav@gmail.com"})



  return (

    <userContext.Provider value={user}>
    <div className="App">
     <Routers/>
    </div>
    </userContext.Provider>
  );
}



















export default App;
