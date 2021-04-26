export const addCar = (idItem) => {
  return {
    type: 'ADD_CAR',
    payload: {
      id: idItem,
    },
  };
};

export const removeCar = (idItem) => {
  return {
    type: 'DECREASE_CAR',
    payload: {
      id: idItem,
    },
  };
};

export const deleteItem = (idItem) => {
  return {
    type: 'DELETE_ITEM',
    payload: {
      id: idItem,
    },
  };
};
