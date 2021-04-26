import React from 'react';
import { connect } from 'react-redux';
import { addCar } from '../actions';
import Stamp from './stamp';
import '../assets/styles/product.css';
import ProductDetails from './product-details';

const Product = (props) => {
  const { id, title, image, sellos } = props;
  const handleSetCar = (id) => {
    props.addCar(id);
  };

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
      <ProductDetails {...props} />
      <div
        className='botton-add-car'
        onClick={() => handleSetCar(id)}
      >
        <p>Agregar al carrito</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addCar,
};
export default connect(null, mapDispatchToProps)(Product);
