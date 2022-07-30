import React from 'react'
import Stats from '../Stats/Stats'
import Temperature from '../Temperature/Temperature'
import "./Forecast.scss"



const Forecast = ({
  weather,
  onFavAdd,
  fav,
  onFavDel
}) => {
  return (
    
    <div className="grid-container">
        <Temperature weather = {weather} onFavAdd = {onFavAdd} fav = {fav} onFavDel = {onFavDel}/>
        <Stats weather = {weather} />
    </div>

  )
}

export default Forecast