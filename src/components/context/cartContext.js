import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import useLocalStorage from "../../Hooks/LocalStorage";

const CartContext = createContext({
    products: [],
    addToCart:() => {},
    clearCart: ()=> {},
    count: 0,
})

const useCart = () => { 
    return useContext(CartContext)
 }

 
  const CartContextProvider = ({children}) => {

       const [products, setProducts] = useLocalStorage('products',[])

       const addToCart = (product) => { 
        setProducts (products =>  [...products, product])
        }

       const clearCart = () => { 
        setProducts([])
        }

       const context = {
        products: products,
        addToCart:addToCart,
        clearCart: clearCart,
        count: products.length
    }

   return (
     <CartContext.Provider value={context}>
        {children}
     </CartContext.Provider>
   )
 }
 
 export {useCart, CartContextProvider}