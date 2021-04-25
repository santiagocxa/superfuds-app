import React from 'react';
import '../assets/styles/price.css'

const Price = ({ price }) => {
   
  return (
    <div className='price'>
      <strong>$</strong>
      {Intl.NumberFormat().format(price)}
    </div>
  );
};

export default Price;
