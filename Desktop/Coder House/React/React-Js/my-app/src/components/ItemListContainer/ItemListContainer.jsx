import { React, useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import productos from "../mock/productos"
//ItemListContainer: Tiene que tener el useEffect y la promesa para traer los productos, guardar los productos en un estado y despues pasarlos por props a ItemList

const getProductsPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productos);
  }, 3000);
});
const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductsPromise.then((data) => setProductos(data));
  }, []);

  return (
    <div className="row" style={{ padding: "10px" }}>
        <ItemList productos={ productos } />
    </div>
  );
};

export default ItemListContainer;

/*consultarPromesa(true)
   .then(data => {
      console.log(data);
   })
   .catch(error => {
      console.error(error)   
   })*/

//import Counter from "../Counter/Counter";

/*esta funcion es del Counter
   function onAdd(count){
      console.log(`Se han seleccionado ${count} productos`)
   }
   return (
      <div>    
         <Counter stock={ 5 } onAdd={onAdd} />
      </div>
   )
   */
