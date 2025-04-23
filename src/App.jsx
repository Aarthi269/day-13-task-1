import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './ProductCard';

const App = () => {
  const products = [
    {
      productName: 'Wireless Headphones',
      price: 99.99,
      imageUrl: 'https://via.placeholder.com/150',
      onSale: true,
    },
    {
      productName: 'Bluetooth Speaker',
      price: 49.99,
      imageUrl: 'https://via.placeholder.com/150',
      onSale: false,
    },
    {
      productName: 'Smartwatch',
      price: 199.99,
      imageUrl: 'https://via.placeholder.com/150',
      onSale: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product, index) => (
        <ProductCard 
          key={index} 
          productName={product.productName}
          price={product.price}
          imageUrl={product.imageUrl}
          onSale={product.onSale} 
        />
      ))}
    </div>
  );
};

export default App;
