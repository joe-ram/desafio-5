import React from 'react'
import Item from '../Item/Item'

//ItemList: Lo unico que hace es recibir la lista de productos por props y mapear a componentes Item
const ItemList = ({productos}) => {
  return (
     <div>
        {
           productos.map((elemento) => {
              return (
                 <Item producto={elemento} key={elemento.id} />
              )
           })
        }
     </div>

  )
}

export default ItemList 