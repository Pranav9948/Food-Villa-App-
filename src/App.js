
import './App.css';
import Routers from './Routers';
import React ,{lazy
} from 'react';



  const Cart=lazy(()=>import('./Cart/Cart'))



function App() {
  return (
    <div className="App">
     <Routers/>
    </div>
  );
}



















export default App;
