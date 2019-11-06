import { useDispatch } from 'react-redux'

const useActions = () => {
  const dispatch = useDispatch()

  const toggle_menu = () => {
    dispatch({
      type: 'TOGGLE_MENU'
    })
  }

  return {
    toggle_menu
  }
}

export default useActions