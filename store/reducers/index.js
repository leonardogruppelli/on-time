const initialState = {
  menu_active: false
}

export const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        menu_active: !state.menu_active
      }

    default:
      return state
  }
}