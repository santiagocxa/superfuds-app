import React from 'react';
import { connect } from 'react-redux'
import { addCar } from '../actions'
import Stamp from './stamp';
import Weight from './weight';
import Price from './price';
import '../assets/styles/product.css';

const Product = (props) => {
  const {id, title, image, sellos, price_real, net_content, units_sf } = props;

  const handleSetCar = (id) => {
    props.addCar(id)
  }

  return (
    <div className='product'>
      <div className='product__container-img'>
        <div className='product__container-img-product'>
          <img src={image} alt={title} />
        </div>
        <div className='product__container-img-stamp'>
          {sellos.map((item) => (
            <Stamp key={item.name} {...item} />
          ))}
        </div>
      </div>
      <Weight weight={net_content} />
      <div className='product__title'>
        <h1>{title}</h1>
      </div>
      <div className='product__amount'>
        <Price price={price_real} />
        <p>{` x ${units_sf} unids`}</p>
      </div>
      <div className='botton-add-car' onClick={() => handleSetCar(id)}>
        <p>Agregar al carrito</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addCar,
}
export default connect(null, mapDispatchToProps)(Product)
