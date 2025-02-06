import React, {useState} from 'react'
import ProductItem from './ProductItem'

const ProductList = () => {
   const [productos, setProductos] = useState([
      {producto: 'producto1'},
      {producto: 'producto2'},
      {producto: 'producto3'}
   ])

   return (
     <>
        <ProductItem 
         idProducto = {1}
         nombreProducto = "Auriculares Bluetooth"
         precioProducto= {45.99}
         imagenProducto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQy69259VAoSH6Bn6uzsibwgo6Z8qwgRxwg&s"
        />
          <ProductItem 
         idProducto = {2}
         nombreProducto = "Smartphone 64GB"
         precioProducto= {299.00}
         imagenProducto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl_db2uv278DAjaCiw1xwz0ZaA71keF5mNmw&s"
        />
          <ProductItem 
         idProducto = {3}
         nombreProducto = "Laptop 15.6 pulgadas"
         precioProducto= {599.99}
         imagenProducto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaIUbmRNjVSggJk6peCFTXi9098hU82vsbfw&s"
        />
          <ProductItem 
         idProducto = {4}
         nombreProducto = "Reloj inteligente"
         precioProducto= {89.99}
         imagenProducto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-FCjcdkSqh5VRUNl03phNd-KJE5p2ZoMCSA&s"
        />
          <ProductItem 
         idProducto = {5}
         nombreProducto = "Camara Digital 20MP"
         precioProducto= {199.99}
         imagenProducto="https://images.philips.com/is/image/philipsconsumer/bd29969f1d5443fe8c9ab0cd00a7932d?$pnglarge$&wid=1250"
        />
          <ProductItem 
         idProducto = {6}
         nombreProducto = "Impresora multifuncional"
         precioProducto= {120.00}
         imagenProducto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI4ce6FqOYFU3pT3WpMQrXMVxqRAYc9RsGeA&s"
        />
          <ProductItem 
         idProducto = {7}
         nombreProducto = "Tablet 10 pulgadas"
         precioProducto= {179.99}
         imagenProducto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmu-N1h5McNTg7x23MvoVhxS5oLTKODF2KA&s"
        />
          <ProductItem 
         idProducto = {8}
         nombreProducto = "Teclado mécanico RGB"
         precioProducto= {79.99}
         imagenProducto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAvM9-f9RmL5CB7LGwVzy2vvr3u9A5vohBMQ&s"
        />
          <ProductItem 
         idProducto = {9}
         nombreProducto = "Mochila para laptop"
         precioProducto= {39.50}
         imagenProducto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbtZClHc15xGeg29W2ajt2TTMU1J0Ez_xV5w&s"
        />
          <ProductItem 
         idProducto = {10}
         nombreProducto = "Altavoz portátil Bluetooth"
         precioProducto= {55.00}
         imagenProducto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD8f2XpccfJn7W6vBbgxSXbjOm4qEI1t1Fqw&s"
        />
     </>
   )
}

export default ProductList;