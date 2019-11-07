import React from 'react'
import useGetters from 'store/getters'
import useActions from 'store/actions'

const Header = () => {
  const { menu_active } = useGetters()
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
        <div className="user">
          <div className="user__name">
            <span>Leonardo Gruppelli</span>
          </div>
          <div className="user__image">
            <img src="https://via.placeholder.com/150" alt="User" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header