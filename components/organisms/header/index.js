import React, { useState } from 'react'
import useGetters from 'store/getters'
import useActions from 'store/actions'
import { AiOutlineLogout } from 'react-icons/ai'

const Header = () => {
  const { menu_active } = useGetters()
  const [controls_active, set_controls_active] = useState(false)
  const { toggle_menu } = useActions()

  return (
    <header>
      <div className="logo logo--small">
        <h1><span>.</span>o<strong>t</strong></h1>
      </div>
      <div className="logo logo--full">
        <h1><span>.</span>on<strong>time</strong></h1>
      </div>

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
            <span>Leonardo Gruppelli</span>
          </div>
          <div className="user__image">
            <img src="https://via.placeholder.com/150" alt="User" />
          </div>

          <div className={`user__controls ${controls_active && "is-active"}`}>
            <span>Logout</span>
            <AiOutlineLogout />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header