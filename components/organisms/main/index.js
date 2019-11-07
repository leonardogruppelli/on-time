import React from 'react'
import useGetters from 'store/getters'

const Main = ({ children }) => {
  const { menu_active } = useGetters()

  return (
    <main className={
      menu_active
        ? "is-contained"
        : "is-expanded"
    }>
      {children}
    </main>
  )
}


export default Main