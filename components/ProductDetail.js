import React from 'react';
import { useParams } from 'react-router-dom';
import products from './products'; // Supondo que você tenha um arquivo de produtos

function ProductDetail() {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Preço: R${product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductDetail;
