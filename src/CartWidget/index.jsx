import React from "react";
import { useCartContext } from '../CartContext';

export const CartWidget =() =>{
    const {totalProduct} = useCartContext();
    return( 
        <>
        <i className="bi bi-bag"></i>
        <span>{totalProduct()|| ''}</span>
        </>
    )
}

export default CartWidget;

