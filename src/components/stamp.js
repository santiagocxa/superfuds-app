import React from 'react';
import '../assets/styles/stamp.css'


const Stamp = ({ name, image}) => {
  return (
    <div className="stamp-image-tooltip">
      <img src={image} alt={name} />
      <div className='stamp-image-tooltip-text'>
        <strong>Producto: </strong>{name}
      </div>
    </div>
  );
};

export default Stamp;