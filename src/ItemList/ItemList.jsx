import React from 'react'
import Item from '../Item/Item'

/* const ItemList = ({product}) => {
  return (
    <div>
        <h3>Lista de productos</h3>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
        {product.map((product)=><Item key={product.id} product={product}/>)}
        </div>
    </div>
  )
} */

const ItemList =({data=[]})=>{
  return(
    data.map(product => <Item key={product.id} info={product}/>)
  )
}

export default ItemList