import React from 'react';
import '../assets/styles/stamp.css'


const Stamp = ({description}) => {
  return (
    <div className="stamp-image-tooltip">
      <img src={description.image} alt={description.name} />
      <div className='stamp-image-tooltip-text'>
        <strong>Producto </strong>{description.name}
      </div>
    </div>
  );
};

export default Stamp;