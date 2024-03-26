import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import RoleSelect from './Role-Select-Comp/RoleSelect';
import Home from './Components-Home/Home';
import Applied from './Applied/Applied'
import Saved from './Saved/Saved'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Home/> */}
    {/* <Applied/> */}
    <Saved/>
    {/* <App /> */}
    {/* <RoleSelect/> */}
    {/* <Login/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
