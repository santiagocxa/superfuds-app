import React from 'react';
import Product from './product';

import '../assets/styles/carousel.css';

const Carousel = ({ products }) => (
  <>
    <div className='carousel'>
      <div className='carousel__container'>
        {products.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </div>
  </>
);

export default Carousel;
