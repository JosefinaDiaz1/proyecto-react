import React from 'react'
import "../Item/Item.css"

const Item =({info}) =>{
  return(
    <>
      <a href="" className='producto'>
        <img src={info.img} alt=""/>
        <p>{info.name}</p>
      </a>
    </>
  ) 
}


export default Item; 