import React from 'react';
import { connect } from 'react-redux';
import { addCar, removeCar } from '../actions';

import '../assets/styles/units.css';

const Units = ({ id, units, addCar, removeCar }) => {
  return (
    <div className='units'>
      <div className='units-change' onClick={() => removeCar(id)}>
        -
      </div>
      <div className='units-count'>{units}</div>
      <div className='units-change' onClick={() => addCar(id)}>
        +
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addCar,
  removeCar,
};
export default connect(null, mapDispatchToProps)(Units);
