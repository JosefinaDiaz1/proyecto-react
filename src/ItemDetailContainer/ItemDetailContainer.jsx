import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import {useParams} from 'react-router-dom'


const productos = [{id:'01', category:'Aros', name:'Argolla Plateada', 
                description:"Argolla de acero quirurgico", 
                img:'https://i.postimg.cc/rsyWp2gq/argolla-Plateada.jpg', stock:5},{id:'02', categoria:'Aros', name:'Aros', description:"Aros de acero quirurgico a presion", img:'https://i.postimg.cc/KvHLmVTy/aros.jpg', stock:15},
                {id:'04', category:'Aros', name:'Argollas Doradas', description:"Argolla de acero quirurgico dorado", img:'https://i.postimg.cc/SxY9RrLY/aros-Dorados.jpg', stock:7},
                {id:'05', category:'Accesorios', name:'Collar Estrellas', description:"Collar de acero quirurgico con dijes de estrellas", img:'https://i.postimg.cc/j5tn8Ypy/collar-Estrellas.jpg', stock:5},
                {id:'06', category:'Accesorios', name:'Gafas Vintage', description:"Gafas de sol color negro", img:'https://i.postimg.cc/T1HyYLpc/gafas.jpg', stock:15},
                {id:'07', category:'Accesorios', name:'Gorros', description:"Gorro de lana color negro y mostaza", img:'https://i.postimg.cc/dQWZ9X4T/gorros.jpg', stock:7}];

const ItemDetailContainer =()=>{

    const [data, setData]=useState({});
    const{detalleId}=useParams;
    useEffect(()=>{
        const getData=new Promise (resolve=>{
            setTimeout(()=>{
                resolve(productos);
            },3000);
        });
        getData.then(res => setData(res.find(Accesorios => Accesorios.id === parseInt(detalleId) )))
    },[]);
    
    return(
        <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer;