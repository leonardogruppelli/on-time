import React from 'react'
import { FiPieChart, FiUser, FiCalendar, FiClock } from 'react-icons/fi'
import Link from 'next/link'
import useGetters from 'store/getters'
import { withRouter } from 'next/router'

const Sidebar = ({ router }) => {
  const { menu_active } = useGetters()
  const { route } = router

  return (
    <aside className={
      menu_active
        ? "is-active"
        : "is-inactive"
    }>
      <ul>
        <li className={route == "/" ? "is-active" : ""}>
          <Link href="/">
            <a>
              <FiPieChart />
              <span>Dashboard</span>
            </a>
          </Link>
        </li>
        <li className={route == "/users" ? "is-active" : ""}>
          <Link href="/users">
            <a>
              <FiUser />
              <span>Users</span>
            </a>
          </Link>
        </li>
        <li className={route == "/registers" ? "is-active" : ""}>
          <Link href="/registers">
            <a>
              <FiCalendar />
              <span>Registers</span>
            </a>
          </Link>
        </li>
        <li className={route == "/entries" ? "is-active" : ""}>
          <Link href="/entries">
            <a>
              <FiClock />
              <span>Entries</span>
            </a>
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default withRouter(Sidebar)