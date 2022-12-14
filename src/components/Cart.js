import React from 'react'
import { useCart } from './context/cartContext'

const Cart = () => {

    const getTotal = () =>{

        let
         total = 0
        products.forEach( prod =>{
        console.log("quantity",prod.quantity,typeof(prod.quantity))
        console.log("price",prod.price,typeof(prod.price))
        total = total + (Number(prod.quantity)*Number(prod.price))}
        )
        return total
        }

    // const getTotal = () =>{
    //     const total = 0
    //       products.forEach( prod =>{
    //       total = total + (prod.quantity*prod.price)}
    //   )
    //    return total
    //   }

    const {products, clearCart} = useCart( )
  return (
    <div>
        <div> CARRITO</div>
        {products.map ((p, i) => <li className='carrito' key={i}> Producto: {p.name}, ${p.price}, {p.detail}</li>)}
        <p>TOTAL</p> <li>$ {(getTotal())}</li>
        <button onClick= {clearCart}className='btn'>Limpiar carrito</button>

    </div>
  )
}

export default Cart