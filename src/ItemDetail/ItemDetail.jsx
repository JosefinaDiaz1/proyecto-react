import ItemCount from "../ItemsCount";
import { useState } from "react";

export const ItemDetail =({data})=>{

    const[goToCart, setGoToCart]=useState(false);

    const onAdd=(quantity)=>{
        setGoToCart(true);

    }
    return(
        <div className="container">
            <div className="detalle">
                <img className="img_detalle" src={data.img} alt="" />
                <div className="content">
                    <h1>{data.name}</h1>
                    {
                        goToCart
                        ? <link>TerminarCompra</link>
                        : <ItemCount initial={1} stock={15} onAdd={onAdd}/>}
                </div>
            </div>

        </div>
    )
}

export default ItemDetail;