import React, {useContext} from 'react';
import "../Item/Item.css";
import {Link} from 'react-router-dom'
import { useCartContext } from '../CartContext';

const Item =({info}) =>{
  const saludo = useContext(useCartContext);
  console.log('Item:', saludo);

  return(
    <>
      <Link to={`/Detalle/${info.id}`} className='producto'>
        <img src={info.img} alt=""/>
        <p>{info.name}</p>
      </Link>
    </>
  ) 
}


export default Item; 