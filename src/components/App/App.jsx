import React, {useEffect, useState} from 'react'
import "normalize.css"
import "./App.scss"
import Input from '../Input/Input'
import Forecast from '../Forecast/Forecast'
import { API_KEY } from '../../config'
import { toCelsium } from '../../utils'
import FavEl from '../FavEl/FavEl'


const App = () => {

  const [data, setData] = useState({
    weather: "",
    error: "",
  })


  const [fav, setFav] = useState([]);

  useEffect(()=>{
    console.log("Getted");
    let items = JSON.parse(localStorage.getItem("items"))
    if(items){
      setFav([...items])
    }
  },[])

  useEffect(()=>{
    console.log("Setted");
    localStorage.setItem("items", JSON.stringify(fav))
    console.log(fav);
  },[fav])
  

  

  const addToFavHandler = (cityName)=>{
    console.log("CLicked");
    setFav([...fav].concat(cityName))
  }

  const delFromFav = (cityName)=>{
    setFav([...fav.filter((el)=>{
      if(el===cityName) return false
      return true
    })])
  }

  const onClickHandler = (value, ref)=>{
    let current = new Date();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${API_KEY}`)
        .then(res => res.json())
        .then(result => {
          const weatherObj = {
            feelsLike: toCelsium(result.main.feels_like),
            temp: toCelsium(result.main.temp),
            humidity: result.main.humidity,
            city: result.name,
            country: result.sys.country,
            visibility: (result.visibility)/1000,
            w_speed: result.wind.speed,
            pressure: result.main.pressure,
            type: result.weather[0].main,
            time: current.toLocaleTimeString(),
            icon: result.weather[0].icon,
          }
          if(ref){
            ref.current.value = ""
          }
          setData({weather:weatherObj, error: false})
        })
        .catch(error=>{
          setData({weather:data.weather, error: value? "Invalid Value" : "Null Object"})
      })
  }
  

  
  console.count("Render")

  return (
    <div className='app-bg'>
        <div className="container">
          <Input onClick = {onClickHandler}/>
          { 
            data.weather 
            ? <Forecast weather = {data.weather} onFavAdd = {addToFavHandler} fav = {fav} onFavDel = {delFromFav}/>
            : ""
          }
          
          {
            fav.length > 0
            ? <div className='fav'>Favourites</div> 
            : ""
          }

          {
            fav.map((el)=>{
              return <FavEl name = {el} onClick = {onClickHandler} key = {el}/>
            })
          }
        </div>
    </div>
  )
}

export default App;