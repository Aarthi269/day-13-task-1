// src/ProductCard.jsx
import React from 'react';

const ProductCard = ({ productName, price, imageUrl, onSale }) => {
  const formattedPrice = `$${price.toFixed(2)}`;
  return (
    <div 
      className={`border p-4 rounded-lg ${onSale ? 'border-red-500' : 'border-gray-300'}`}
      style={{ maxWidth: '200px', textAlign: 'center' }}
    >
      {onSale && <div className="bg-red-500 text-white p-1 text-sm font-bold absolute top-0 left-0 transform translate-x-4 translate-y-4">SALE!</div>}
      <img src={imageUrl} alt={productName} className="w-full h-32 object-cover rounded" />
      <h3 className="mt-2 text-lg font-semibold">{productName}</h3>
      <p className="text-gray-500">{formattedPrice}</p>
    </div>
  );
};

export default ProductCard;
