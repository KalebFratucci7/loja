import React from 'react';
import { Link } from 'react-router-dom';
import products from './products'; // Supondo que você tenha um arquivo de produtos
import './ProductList.css'; // Importa o CSS para estilização

function ProductList() {
  return (
    <div className="product-list">
      {products.map(product => (
        <Link key={product.id} to={`/product/${product.id}`} className="product-card">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-details">
            <h2>{product.name}</h2>
            <p>Preço: R${product.price.toFixed(2)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
