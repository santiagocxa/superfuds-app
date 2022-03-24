import React from 'react';
import Weight from './weight';
import Price from './price';

const ProductDetails = (props) => {
  const { net_content, title, price_real, units_sf } = props;
  return (
    <div className='product__details'>
      <Weight weight={net_content} />
      <h1 className='product__title'>{title.substr(0, 50)}</h1>
      <div className='product__amount'>
        <Price price={price_real} />
        <p>{` x ${units_sf} unids`}</p>
      </div>
    </div>
  );
};
export default ProductDetails;
