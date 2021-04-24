import React from 'react';
import '../assets/styles/price.css'

const Price = () => {
  let priceProduct = '5000';
  return (
    <div className='price'>
      <strong>$</strong>
      {Intl.NumberFormat().format(priceProduct)}
    </div>
  );
};

export default Price;
