import React from "react";
import { CartContext } from '../CartContext';
import ItemCart from "../ItemCart/Index";



const Cart =()=>{
    const [ cart, totalPrice] = CartContext

    if(cart.length === 0){
        return(
            <>
            <p>No hay productos en el carrito</p>
            <link to='/'>Hacer compras</link>
            </>
        )
    }
    return(
        <>
            {
                cart.map(productos => <ItemCart key={productos.id} productos={productos}/>)
            }
        </>
    )
}

export default Cart;