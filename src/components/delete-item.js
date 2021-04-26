import React from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../actions';

import '../assets/styles/delete-item.css';
import deleteIcont from '../assets/static/delete.png';

const DeleteItem = ({ id, deleteItem }) => {
  return (
    <div className='delete-item' onClick={() => deleteItem(id)}>
      <img src={deleteIcont} alt='Eliminar Producto' />
    </div>
  );
};

const mapDispatchToProps = {
  deleteItem,
};

export default connect(null, mapDispatchToProps)(DeleteItem);
