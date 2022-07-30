import React from 'react'
import "./FavEl.scss"




const FavEl = ({
  name,
  onClick
}) => {
  return (
    <button className='fav-item' onClick={()=>{onClick(name, null)}}>{name}</button>
  )
}

export default FavEl