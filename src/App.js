import React, { useState, useEffect } from 'react';
import "./App.css"
import "./component/form.css";
import axios from 'axios';
import "weather-icons/css/weather-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './component/Weather';
import Form from './component/Form';
import { ApiCall } from './actions';
import GetWeather from './component/GetWeather';

function App() {
  const key = "429736441cf3572838aa10530929f7cd";

  const [cityname, setCityname]=useState('');
  const [countryname, setCountryname]=useState('');
  const [icon, setIcon] = useState('');
  const [ payload, setPayload ] = useState(null)
  // const [data , setData]=useState(null);

  const onHandleSubmit = async e => {
    e.preventDefault();
    const data = await ApiCall(cityname,countryname,key);
    setPayload(data)
    console.log(data,"datadata")
  }

  //getWeather(payload.sys.icon.id)
  
  return (
    <div className="App">
      <Form
       city={cityname}
       country={countryname}
       setCityname={setCityname}
       setCountryname={setCountryname}
       onHandleSubmit = {onHandleSubmit} 
       setPayload={setPayload}
       />
       {
         payload && 
         <GetWeather
         setIcon = {setIcon}
         rangeid = {payload.weather[0].id}
       />
       }
       {
        payload &&
         <Weather
         payload={payload}
         icon={icon}
       />
       }
       
      

    </div>
  );
}

export default App;