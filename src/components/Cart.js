import React from 'react'
import { useCart } from './context/cartContext'

const Cart = () => {

    const {products, clearCart} = useCart( )
  return (
    <div>
        <div> CARRITO</div>
        {products.map ((p, i) => <li key={i}>{p.name}: {p.price}: {p.detail}</li>)}
      
        <button onClick= {clearCart}className='btn'>Limpiar carrito</button>

    </div>
  )
}

export default Cart