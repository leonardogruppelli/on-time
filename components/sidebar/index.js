import React from 'react'
import { FiPieChart, FiUser, FiCalendar } from 'react-icons/fi'
import Link from 'next/link'
import useGetters from 'store/getters'

const Sidebar = () => {
  const { menu_active } = useGetters()

  return (
    <aside className={
      menu_active
        ? "is-active"
        : "is-inactive"
    }>
      <ul>
        <li>
          <Link href="/">
            <a>
              <FiPieChart />
              <span>Dashboard</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/users">
            <a>
              <FiUser />
              <span>Users</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/registers">
            <a>
              <FiCalendar />
              <span>Registers</span>
            </a>
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar