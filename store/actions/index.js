import { useDispatch } from 'react-redux'

const useActions = () => {
  const dispatch = useDispatch()

  const toggle_menu = () => {
    dispatch({
      type: 'TOGGLE_MENU'
    })
  }

  const login = user => {
    dispatch({
      type: 'LOGIN',
      logged_in: true,
      user: user
    })
  }

  const logout = () => {
    dispatch({
      type: 'LOGOUT'
    })
  }

  return {
    toggle_menu,
    login,
    logout
  }
}

export default useActions
