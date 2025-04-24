import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './ProductCard';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';

const App = () => {
  const products = [
    {
      productName: 'Wireless Headphones',
      price: 99.99,
      imageUrl: image1,
      onSale: true,
    },
    {
      productName: 'Bluetooth Speaker',
      price: 49.99,
      imageUrl: image2,
      onSale: false,
    },
    {
      productName: 'Smartwatch',
      price: 199.99,
      imageUrl: image3,
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
