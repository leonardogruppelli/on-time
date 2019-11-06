import React from 'react'
import Link from 'next/link'
import useGetters from 'store/getters'
import useActions from 'store/actions'

const Header = () => {
  const { menu_active } = useGetters()
  const { toggle_menu } = useActions()

  return (
    <header>
      <button className={`btn btn--menu ${menu_active && "is-active"}`} onClick={() => toggle_menu()}>
        Toggle Menu
        <span></span>
        <span className="middle"></span>
        <span></span>
      </button>
    </header>
  )
}

export default Header