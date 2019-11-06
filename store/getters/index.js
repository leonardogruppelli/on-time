import { useSelector } from 'react-redux'

const useGetters = () => {
  const selector = useSelector(state => state)

  const menu_active = selector.menu_active

  return {
    menu_active
  }
}

export default useGetters