import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import {collection, doc, getDoc, getFirestore} from 'firebase/firestore'
import { useCart } from './context/cartContext'

const ItemDetail = () => {
    const {id} = useParams ()

    const [product, setProduct] = useState([])
   const {addToCart} = useCart()
    

    useEffect(() => {
        getProduct()

    }, [])

    const getProduct = () => { 
         const db = getFirestore()
        const productsCollection = collection (db, 'productos')
        const docRef = doc (productsCollection, id)


        getDoc(docRef).then(res =>{
            setProduct (res.data())
            })

        }

        // const addHandler = (quantity) => {
        //     addToCart ({product,quantity})
        //     }

        const addHandler = () => {
            addToCart (product)

        }
     
  return (
    <div className='caja2' >
    <div>Detalle del producto : </div>
    <div> {product.name}</div>
    <div> ${product.price}</div>
    <div> {product.detail}</div>
    <img className= 'foto' src= {product.img} />
    <Link to='/cart'>
    <button onClick={addHandler}className='btn boton'> Agregar al carrito </button>
    {/* <button onClick={()=>addHandler(1)}className='btn boton'> Agregar al carrito </button> */}
    </Link>
    </div>
  )
  }


export default ItemDetail