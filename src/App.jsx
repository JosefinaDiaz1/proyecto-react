import './App.css';
import {NavBar} from "./components/NavBar";
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Index';
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  return <>
            <BrowserRouter>
              <NavBar/>
              <Routes>
                <Route path='/' element={<ItemListContainer texto ='Tienda Online'/>}/>
                <Route path='/Producto/:CategoriaId' element={<ItemListContainer texto ='Tienda Online'/>}/>
                <Route path='/Promociones/' element={<ItemListContainer texto ='Tienda Online'/>}/>
                <Route path='/Cart' element={<Cart/>}/>
                <Route path='/Detalle/:detalleId' element={<ItemDetailContainer/>}/>
              </Routes>
            </BrowserRouter>
          
          </>
}

export default App;


