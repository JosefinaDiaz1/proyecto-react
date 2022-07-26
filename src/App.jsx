import './App.css';
import {NavBar} from "./components/NavBar";
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Index';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import CartProvider from './CartContext';



function App() {
  return <>
            <BrowserRouter>
              <CartProvider>
              <NavBar/>
              <Routes>
                <Route path='/' element={<ItemListContainer texto ='Tienda Online'/>}/>
                <Route path='/Producto/:CategoriaId' element={<ItemListContainer texto ='Tienda Online'/>}/>
                <Route path='/Promociones/' element={<ItemListContainer texto ='Tienda Online'/>}/>
                <Route path='/Cart' element={<Cart/>}/>
                <Route path='/Detalle/:detalleId' element={<ItemDetailContainer/>}/>
              </Routes>
              </CartProvider>
            </BrowserRouter>
          
          </>
}

export default App;


