import React, {useState, useEffect, useRef} from 'react'
import "./Input.scss"
import {AiOutlineSearch} from "react-icons/ai"


const Input = ({
  onClick
}) => {

  const [inputValue, setInputValue] = useState("")
  const input = useRef(null)

  useEffect(()=>{
    
  })
  

  return (
    <div className='input-container'>
      <input type="text" className="app-input" ref={input} onKeyDown={(e)=>{
        if(e.key === "Enter"){
          onClick(inputValue, input)
        }
      }} placeholder='Search the weather in...' 
        onChange = {(event)=>{
          setInputValue(event.target.value)}}/>
      <button className="app-input-btn" onClick={()=>{onClick(inputValue, input)}}>
        <AiOutlineSearch className='icon-search'/>
      </button>
    </div>
  )
}

export default Input