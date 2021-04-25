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
      };

    default:
      return state;
  }
};

export default reducer;
