const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CAR':
      const item = state.products.find(
        (products) => products.id === action.payload.id
      );
      const beToCar = state.car.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        car: beToCar
          ? state.car.map((item) =>
              item.id === action.payload.id
                ? { ...item, units: item.units + 1 }
                : item
            )
          : [...state.car, { ...item, units: 1 }],
        countItem: state.countItem + 1,
      };

    case 'DECREASE_CAR':
      const removeToItem = state.car.find(
        (car) => car.id === action.payload.id
      );

      return {
        ...state,
        car:
          removeToItem.units > 1
            ? state.car.map((item) =>
                item.id === action.payload.id
                  ? { ...item, units: item.units - 1 }
                  : item
              )
            : state.car.filter(
                (item) => item.id !== action.payload.id
              ),
        countItem: state.countItem - 1,
      };

    case 'DELETE_ITEM':
      const productDelete = state.car.find(
        (car) => car.id === action.payload.id
      );
      return {
        ...state,
        countItem: state.countItem - productDelete.units,
        car: state.car.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default reducer;
