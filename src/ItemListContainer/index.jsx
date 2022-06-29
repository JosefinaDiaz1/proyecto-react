import React from "react";
import Tittle from "../Tittle";
import ItemCount from "../ItemsCount";

export const ItemListContainer = (props) =>{

        const onAdd=(quantity)=>{
            console.log(`Compraste ${quantity}  unidades `)

        }
        return(
            <>
                <Tittle greeting={props.texto} />
                <ItemCount initial={1} stock={15} onAdd={onAdd}/>
            </>
        );
}

export default ItemListContainer;