import React from "react";

//Item: Contiene el HTML que muestra cada producto en el catalogo
const Item = ({producto}) => {
  return (
    <div>
      <div
        className="card border-primary mb-3"
        
        style={{ maxWidth: "15rem", margin: "10px" }}
      >
        <div className="card-header">{producto.nombre}</div>
        <div className="card-body">
          <p className="card-text">Marca: {producto.marca}</p>
          <p className="card-text">Precio: ${producto.precio}</p>
          <p className="card-text">Stock: {producto.stock}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
