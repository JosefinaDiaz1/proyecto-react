import './App.css';
import {NavBar} from "./components/NavBar";
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from './ItemDetailContainer/IndexIDC';



function App() {
  return <>
          <NavBar/>
          <ItemListContainer texto ='Tienda Online'/>
          <ItemDetailContainer/>
  </>
}

export default App;


