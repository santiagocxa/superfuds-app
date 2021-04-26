import React from 'react';
import Price from './price';
import Units from './units';
import Weight from './weight';
import DeleteItem from './delete-item';

import '../assets/styles/car-details.css';

const CarDetails = (props) => {
  const {
    id,
    net_content,
    title,
    price_real,
    units_sf,
    units,
  } = props;

  return (
    <div className='car-details'>
      <div className='car-details__description'>
        <h1 className='product__title'>{title}</h1>
        <p>{` x ${units_sf} unids`}</p>
        <Weight weight={net_content} />
      </div>
      <Units units={units} id={id} />
      <Price price={price_real} />
      <DeleteItem id={id} />
    </div>
  );
};

export default CarDetails;
