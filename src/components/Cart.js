import React from 'react'
import { useCart } from './context/cartContext'

const Cart = () => {

    const getTotal = () =>{
        const subtotales = products.map(ic => ic.quantity*ic.price)
        const total = subtotales.reduce((total, cant) => total + cant, 0 )
        return total
             
      }

    const {products, clearCart} = useCart( )
  return (
    <div>
        <div> CARRITO</div>
        {products.map ((p, i) => <li className='carrito' key={i}> Producto: {p.name}, ${p.price}, {p.detail}</li>)}
        <p>TOTAL</p> <li>$ {getTotal()}</li>
        <button onClick= {clearCart}className='btn'>Limpiar carrito</button>

    </div>
  )
}

export default Cart