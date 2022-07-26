import React from "react";
import { CartContext } from '../CartContext';

export const CartWidget =() =>{
    const {totalProduct} = CartContext();
    return( 
        <>
        <i className="bi bi-bag"></i>
        <span>{totalProduct()|| ''}</span>
        </>
    )
}

export default CartWidget;

