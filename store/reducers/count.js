const initialState = {
  count: 0
};

export const count = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return state;
  }
};