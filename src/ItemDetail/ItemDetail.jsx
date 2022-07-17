import React from "react";


export const ItemDetail =({data})=>{
    return(
        <div className="container">
            <div className="detalle">
                <img className="img_detalle" src={data.img} alt="" />
                <div className="content">
                    <h1>{data.name}</h1>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail;