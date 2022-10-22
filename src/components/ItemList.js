import React from 'react'
import { useEffect} from 'react'
import { useState } from 'react'
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import { Link } from 'react-router-dom'



export const Card = ({id,name, price, img}) => {
  return (
    <Link to = {`/Detail/${id}`}>
        
        <div className='caja'>
            <div>{name}</div>
            <div>${price}</div>
            <img className='foto' src= {img}/>
        </div>
    </Link>
  )
}



const ItemList = () => {


    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts()

    }, [])

    const getProducts = () => { 
         const db = getFirestore()
        const productsCollection = collection (db, 'productos')
        getDocs(productsCollection).then(res => {
            const productsData = res.docs.map ( d => ({id: d.id, ...d.data()}) )
            console.log(productsData);
            setProducts(productsData)
            setLoading(false)
        })
     }
    
  return (
    <div>
        {loading ? <h1 className='loading'> Trayendo productos...</h1>
        :
        products.map ( p =><Card key={p.id} {...p}/> )
        }
    </div>
  )
}

export default ItemList