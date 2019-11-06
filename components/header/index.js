import React from 'react'
import Link from 'next/link'
import useGetters from 'store/getters'
import useActions from 'store/actions'

const Header = () => {
  const { menu_active } = useGetters()
  const { toggle_menu } = useActions()

  return (
    <header>
      <button onClick={() => toggle_menu()}>Toggle menu</button>
      <div>{menu_active ? "Menu Ativo" : "Menu Inativo"}</div>

      <ul>
        <li>
          <Link href="/"><a>Home</a></Link>
        </li>
        <li>
          <Link href="/about"><a>About</a></Link>
        </li>
        <li>
          <Link href="/"><a>Contact</a></Link>
        </li>
      </ul>
    </header>
  )
}

export default Header