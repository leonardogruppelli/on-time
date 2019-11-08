const initialState = {
  logged_in: false,
  user: [],
  menu_active: false
}

export const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        logged_in: true,
        user: action.user
      }

    case 'LOGOUT':
      return {
        ...state,
        logged_in: false,
        user: []
      }

    case 'TOGGLE_MENU':
      return {
        ...state,
        menu_active: !state.menu_active
      }

    default:
      return state
  }
}