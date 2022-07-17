import React from 'react';
import "../Item/Item.css";
import {Link} from 'react-router-dom'

const Item =({info}) =>{
  return(
    <>
      <Link to={'/Detalle/${info.id}'} className='producto'>
        <img src={info.img} alt=""/>
        <p>{info.name}</p>
      </Link>
    </>
  ) 
}


export default Item; 