import React from 'react'
import "./Stats.scss"




const Stats = ({
  weather,
}) => {
  return (
    <div className="stats-table">
      <div className="stats-table-item">
        <div className="stats-table-item--name">Temperaturee </div>
        <div className="stats-table-item--value">{weather.feelsLike}/{weather.temp}</div>
      </div>
      <div className="stats-table-item">
        <div className="stats-table-item--name">Humidity</div>
        <div className="stats-table-item--value">{weather.humidity} %</div>
      </div>
      <div className="stats-table-item">
        <div className="stats-table-item--name">Pressure</div>
        <div className="stats-table-item--value">{weather.pressure} hPa</div>
      </div>
      <div className="stats-table-item">
        <div className="stats-table-item--name">Visibility</div>
        <div className="stats-table-item--value">{weather.visibility} km</div>
      </div>
      <div className="stats-table-item">
        <div className="stats-table-item--name">Wind Speed</div>
        <div className="stats-table-item--value">{weather.w_speed}</div>
      </div>
      {/* <div className="stats-table-item">
        <div className="stats-table-item--name">Temperature</div>
        <div className="stats-table-item--value">30/32</div>
      </div> */}
      
    </div>
  )
}

export default Stats