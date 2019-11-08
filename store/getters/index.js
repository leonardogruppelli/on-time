import { useSelector } from 'react-redux'

const useGetters = () => {
  const selector = useSelector(state => state)

  const {
    menu_active,
    logged_in,
    user
   } = selector

  return {
    menu_active,
    logged_in,
    user
  }
}

export default useGetters