import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/header';
import Carousel from '../components/carousel';
import Car from '../components/car';

const App = ({ products, car, countItem }) => {
  return (
    <>
      <Header />
      <Carousel products={products} />
      <Car car={car} countItem={countItem} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    car: state.car,
    countItem: state.countItem,
  };
};

export default connect(mapStateToProps, null)(App);
