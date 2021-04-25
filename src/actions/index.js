export const addCar = (idItem) => {
  return{
    type: 'ADD_CAR',
    payload:{
      id: idItem
    },

  }
}