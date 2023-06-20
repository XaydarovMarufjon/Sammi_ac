// import https from 'https';
import axios from 'axios';
import {getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';
import { response } from 'express';

const getWeather = async (city) =>{
 // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const token = getKeyValue(TOKEN_DICTIONARY.token)

if (!token) {
    throw new  Error("API xato, info: -t [API_TOKEN] Token saqlash")
}
//// axios 
 const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
        q : city ,
        appid : token , 
        lang :  'en' , 
        units  : 'metric'
    },

 })

 console.log(response.data);

 /// ==== https usulida 
//  const url  = new URL('https://api.openweathermap.org/data/2.5/weather')
//  url.searchParams.append('q' , city)
//  url.searchParams.append('appid' , token)
//  url.searchParams.append('lang', 'en')
//  url.searchParams.append('units', 'metric')

//  https.get(url , (response)=>{
//     let res = ''
//     response.on('data', chunk =>{
//         res += chunk
//     })
//     response.on('end' , ()=> console.log(res))
//  })


}

export {getWeather}



