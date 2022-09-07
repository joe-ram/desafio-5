import {React, useState, useEffect} from 'react';
//ItemListContainer: Tiene que tener el useEffect y la promesa para traer los productos, guardar los productos en un estado y despues pasarlos por props a ItemList

const productos = [
   {id: 1, nombre:'producto1', marca:'marca1', precio:120, stock:10},
   {id: 2, nombre:'producto2', marca:'marca2', precio:120, stock:20},
   {id: 3, nombre:'producto3', marca:'marca3', precio:120, stock:15},
   {id: 4, nombre:'producto4', marca:'marca4', precio:120, stock:13},
   {id: 5, nombre:'producto5', marca:'marca5', precio:120, stock:8}
]
function consultarPromesa(confirmacion){
   return new Promise ((res,rej) => {
      if(confirmacion) {
         res(productos)
      } else {
         rej("Acceso denegado")
      }
   })   
}
const ItemListContainer = () => {

   const [productos, setProductos] = useState([]);
   useEffect(() => {
      consultarPromesa(true)
      .then(data => {
         const productosJSX = data.map((producto, indice) => 
            <div className="card border-primary mb-3" key={indice} style={{maxWidth: '15rem', margin:'10px'}}>
               <div className="card-header">{producto.nombre}</div>
               <div className="card-body">
                  <p className="card-text">Marca: {producto.marca}</p>
                  <p className="card-text">Precio: ${producto.precio}</p>
                  <p className="card-text">Stock: {producto.stock}</p>
               </div>
            </div>
         )
      console.log(productosJSX);
      setProductos(productosJSX)
   })
   .catch(error => {
      console.error(error)   
   })
   }, []);

  return (
     <div className='row' style={{padding:'10px'}}>
        {productos}
     </div>
  )
}

export default ItemListContainer