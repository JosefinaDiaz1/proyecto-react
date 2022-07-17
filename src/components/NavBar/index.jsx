import React from "react";
import "./menu.css";
import logo from "../../media/logo.png";
import CartWidget  from "../../CartWidget";
import {NavLink} from 'react-router-dom';


export const NavBar= () =>{
    return(
        <header className="header">
            <img className="logo" src={logo} alt="" to={'/'}/>
            <nav>
                <NavLink className="secciones" to={'/Producto/:CategoriaId'}>Productos</NavLink>
                <NavLink className="secciones" to={'/Promociones'}>Promociones</NavLink>
                <NavLink className="secciones" to={'/'}>Envios</NavLink>
                <NavLink className="secciones" to={'/Cart'}>
                    <CartWidget/>
                </NavLink>
            </nav>   
        
        
        </header>
    )
}

export default NavBar;


