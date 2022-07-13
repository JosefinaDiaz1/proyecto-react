import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/indexID"


const productos = {id:'01', name:'Argolla Plateada', 
                description:"Argolla de acero quirurgico", 
                img:'https://i.postimg.cc/rsyWp2gq/argolla-Plateada.jpg', stock:5};

const ItemDetailContainer =()=>{

    const [data, setData]=useState({});

    useEffect(()=>{
        const getData=new promise (resolve=>{
            setTimeout(()=>{
                resolve(productos);
            },3000);
        });

        getData.then(res=> setData(res));
    },[]);
    
    return(
        <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer;