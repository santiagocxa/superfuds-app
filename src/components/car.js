import React, { useState } from 'react';
import CarDetails from './car-details';

import '../assets/styles/car.css';
import carIcon from '../assets/static/car.png';

const Car = ({ car, countItem }) => {
  const [className, setClassName] = useState({
    carOpen: 'car',
    active: true,
  });

  function handleClick() {
    return className.active
      ? setClassName({ carOpen: 'car car--open', active: false })
      : setClassName({ carOpen: 'car', active: true });
  }

  return (
    <>
      <div
        className='car-content-image'
        onClick={() => handleClick()}
      >
        <p>Carrito </p>
        <h3>{countItem}</h3>
        <img src={carIcon} alt='Carrio de compras' />
      </div>
      <div className={className.carOpen}>
        <p className='car-back' onClick={() => handleClick()}>
          Volver a la tienda
        </p>
        <h2>{`Carrito de compras: ${countItem} unidades`}</h2>
        <div className='items'>
          <p>Producto</p>
          <p>Precio</p>
          <p>Cantiadad</p>
        </div>
        <div className='car-carousel'>
          {car.length > 0 &&
            car.map((item) => <CarDetails key={item.id} {...item} />)}
        </div>
      </div>
    </>
  );
};

export default Car;
