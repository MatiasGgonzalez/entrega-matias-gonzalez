import React from 'react'
import './ItemListContainerStyle.css'
const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h2>{greeting}</h2>
    </div>
  )
}

export default ItemListContainer