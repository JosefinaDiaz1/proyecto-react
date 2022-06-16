import React from 'react';

export const NavBAr = () => {
    return(
        <div className='container'>
            <nav className='nav'>
                <div className='nav_brand'>
                    <a className='navLink' href="#">Nombre Marca</a>
                </div>
                <ul className='listaNueva'>
                    <li>
                        <a className='navLink' href="#">Menú</a>
                    </li>
                    <li>
                        <a className='navLink' href="#">Inicio</a>
                    </li>
                    <li>
                        <a className='navLink' href="#">productos</a>
                    </li>

                </ul>
            </nav>
        </div>
    )
}


export default NavBar;
