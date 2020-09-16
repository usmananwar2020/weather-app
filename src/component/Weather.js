import React from 'react'
import "./form.css"

const minmax= (min,max)=>{
    return(
    <>
    <span className="px-4">Min : {min_t(min)}&deg;</span>,
    <span className="px-4">{max_temp(max)}&deg; : Max</span>
    </>
    )
}
function temp(temp) {
    return (
      Math.floor(temp - 273.15)
    )
  }
  function min_t(temp_min) {
    return (
      Math.floor(temp_min - 273.15)
    )
  }
  function max_temp(temp_max) {
    return (
      Math.floor(temp_max - 273.15)
    )
  }
function Weather(props) { 
    return (
        <div className="container">
        <div className="cards pt-4">
         <h1>{props.payload && props.payload.name} , {props.payload && props.payload.sys.country} </h1>
        <h3><i className={ `wi ${props.icon} display-2`}>{console.log("weather==",props.icon)}</i></h3>
        <h2>{props.payload && temp(props.payload.main.temp)}&deg;</h2>
         <h4>{(props.payload && minmax (props.payload.main.temp_min , props.payload.main.temp_max))}</h4>
        <h4>{props.payload && props.payload.weather[0].description}</h4>
        <h4>Humidity : {props.payload && props.payload.main.humidity}</h4>
        <h4>visibility : {props.payload && props.payload.visibility}</h4>
        <h4>Pressure : {props.payload && props.payload.main.pressure}</h4>
        </div>    
        </div>
    )
   
}

export default Weather
