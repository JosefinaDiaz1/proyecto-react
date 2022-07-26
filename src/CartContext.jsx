import React, {useState} from "react";
export const CartContext = React.createContext([]);


const CartProvider = ({Children})=>{
    const [cart, setCart] = useState([]);

    const AddProduct =(item, quality)=>{
        if (IsInCart(item.id)) {
            setCart(cart.map(productos=>{
                return productos.id === item.id ? {...productos, quality: productos+quality} :productos
            }))
        } else{
            setCart([...cart, {...item, quality}]);
        }
    }

    const totalPrice = ()=>{
        return cart.reduce((prev, act)=> prev + act.quality* actPrice, 0);
    }

    const totalProduct=()=> cart.reduce((acumulador, productoActual)=> acumulador + productoActual.quality, 0);

    const clearCart = () => setCart([]);


    const IsInCart =(id) => cart.find(Productos.id ===id) ? true : false;
    
    const removeProduct = (id) =>setCart(cart.filter(Productos => Productos.id !==id));

    return(
        <CartContext.Provider value={{
            clearCart,
            IsInCart,
            removeProduct,
            AddProduct,
            totalPrice,
            totalProduct, 
            cart
        }}>
            {Children}
        </CartContext.Provider>
    )
}

export default CartProvider;