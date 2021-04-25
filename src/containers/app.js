import React from 'react';
import { connect } from 'react-redux'


import Product from '../components/product'

const App = ({ products, car }) => {
  console.log( products )
  console.log(car)
  return (
    <>
      {products.map(item => 
        <Product key={item.id} {...item} />
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products,
    car: state.car,
  }
}

export default connect(mapStateToProps, null) (App)