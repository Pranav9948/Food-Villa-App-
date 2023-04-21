import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Navbars from './components/Navbars/Navbars';
import { Provider } from 'react-redux';
import store from './utils/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>


       <Provider store={store}>
        <Navbars/>
        <App />
        </Provider>

    </BrowserRouter>
  </React.StrictMode>
);


