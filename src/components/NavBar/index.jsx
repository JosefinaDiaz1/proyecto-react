import React from "react";
import "./menu.css";
import logo from "../../media/logo.png"
import CartWidget  from "../../CartWidget";


export const NavBar= () =>{
    return(
        <header className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <a className="secciones" href="#">Productos</a>
                <a className="secciones" href="#">Promociones</a>
                <a className="secciones" href="#">Envios</a>
                <a className="secciones" href="">
                    <CartWidget/>
                </a>
            </nav>   
        
        
        </header>
    )
}

export default NavBar;


