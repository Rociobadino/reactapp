import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({greetings}) => {
    const styles = {fontsize: '10rem', width: 'fit-content', margin: '6px'}
  return (
    <>
    <div className='centrar'>
    <h2 style= {styles}>{greetings}</h2>
       </div>
    {<ItemList/>}
    </>
  )
}

export default ItemListContainer