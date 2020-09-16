import React from 'react'
import axios from 'axios'


    export const ApiCall = (cityname,countryname,key)  => {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityname},${countryname}&appid=${key}`)
    .then(res => {
    return res.data
    })
    //  (res.data),console.log(res+"= res"))
    .catch(error => {
        console.log(error + "=error")
      })
    }
