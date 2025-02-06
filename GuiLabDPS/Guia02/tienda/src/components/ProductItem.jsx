import React from 'react'
import ProductList from './ProductList';

export function ProductItem({
  idProducto,
  nombreProducto,
  precioProducto,
  imagenProducto,
}) {
  return (
    <article>
      <div className='list-product'>
        <h2 className="product-name">{nombreProducto}</h2>
        <img
        src={imagenProducto}
        alt="Imagen del producto"
        className="product-image"
      />
        <p className="product-id">
          <strong>ID: </strong>
          {idProducto}
        </p>
        <p className="product-price">
          <strong>Precio: <span style={{fontWeight: 'normal'}}>$</span></strong>
          {precioProducto}
        </p>
      </div>
    </article>
  );
}

export default ProductItem;