import React, {useState, useEffect} from 'react'
import "./Temperature.scss"
import {TiWeatherCloudy, TiWeatherSunny, TiWeatherShower, TiWeatherSnow} from "react-icons/ti"


const icon = {
  Clouds:<TiWeatherCloudy/>,
  Clear: <TiWeatherSunny/>,
  Rain: <TiWeatherShower/>,
  Snow: <TiWeatherSnow/>
}





const Temperature = ({
  weather,
  onFavAdd,
  fav,
  onFavDel
}) => {

  const[btnToggle, setBtnToggle] = useState(true)
  useEffect(()=>{
    setBtnToggle(fav.includes(weather.city))
  },[setBtnToggle, fav, weather])
  return (
    <div className="temp-card">
        <div className="temp">{weather.temp}&#xb0;</div>
        <div className="icon">
            {icon[weather.type]}
        </div>
        <div className="refresh-time">{weather.type} as for {weather.time}</div>
        <div className="location">{weather.city}, {weather.country}</div>
        <div className="fav-btn" style = {btnToggle ? {background:'#28a2a2'}:{ background: '#87b7f9'}} onClick = {()=>{
          setBtnToggle(!btnToggle)
          if(btnToggle){
            onFavDel(weather.city)
          }else{
            onFavAdd(weather.city)
          }
        }}>{btnToggle? "Delete" : "Add to favourites"}</div>
    </div>
  )
}

export default Temperature