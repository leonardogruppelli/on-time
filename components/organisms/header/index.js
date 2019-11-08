import React, { useState } from 'react'
import Logo from 'components/atoms/logo'
import useGetters from 'store/getters'
import useActions from 'store/actions'
import { AiOutlineLogout } from 'react-icons/ai'

const Header = () => {
  const { user, menu_active } = useGetters()
  const [controls_active, set_controls_active] = useState(false)
  const { logout, toggle_menu } = useActions()

  return (
    <header>
      <Logo />

      <button className={`btn btn--menu ${menu_active && "is-active"}`} onClick={() => toggle_menu()}>
        Toggle Menu
        <span></span>
        <span className="middle"></span>
        <span></span>
      </button>

      <div className="controls">
        <div
          className={`user ${controls_active && "is-active"}`}
          onClick={() => set_controls_active(!controls_active)}
        >
          <div className="user__name">
            <span>{user.name}</span>
          </div>
          <div className="user__image">
            <img src={user.image} alt="User" />
          </div>

          <div
            className={`user__controls ${controls_active && "is-active"}`}
            onClick={() => logout()}
          >
            <span>Logout</span>
            <AiOutlineLogout />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header