import React,{useState} from 'react'

const GetWeather=(props)=> {
    const { setIcon , rangeid } = props;

    const weatherIcon = {
        Thunderstorm: "wi-thunderstorm",
        Drizzle: "wi-sleet",
        Rain: "wi-snow-showers",
        Snow: "wi-snow",
        Atmosphere: "wi-fog",
        Clear: "wi-day-sunny",
        Clouds: "wi-day-fog"
      };
      
    switch (true) {
        case rangeid >= 200 && rangeid <= 232:
         setIcon(weatherIcon.Thunderstorm);
          break;
        case rangeid >= 300 && rangeid <= 321:
          setIcon(weatherIcon.Drizzle)
          break;
          case rangeid >= 500 && rangeid <= 531:
         setIcon(weatherIcon.Rain);
          break;
        case rangeid >= 600 && rangeid <= 622:
          setIcon(weatherIcon.Snow)
          break;
          case rangeid >= 701 && rangeid <= 781:
         setIcon(weatherIcon.Atmosphere);
          break;
        case rangeid === 800 :
          setIcon(weatherIcon.Clear)
          break;
          case rangeid >= 801 && rangeid <= 804:
         setIcon(weatherIcon.Clouds);
          break;
      }
    return (
        <div>
        </div>
    )
}

export default GetWeather
