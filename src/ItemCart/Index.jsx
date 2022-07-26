import React from "react";
import {useCarContext} from"../CartContext"
import  "../ItemCart/itemCart.css";

const ItemCart =({productos})=>{
    const removeProduct= useCarContext();
    return (
        <div>
            <img src={productos.img} alt={productos.name} />
            <div>
                <p>Nombre: {productos.name}</p>
                <p>Cantidad: {productos.quantity}</p>
                <p>Precio: {productos.price}</p>
                <p>Subtotal: $ {productos.quantity * productos.price}</p>
                <button onClick={()=>removeProduct (productos.id)}>Elminar</button>
            </div>
        </div>
    )
}

export default ItemCart;