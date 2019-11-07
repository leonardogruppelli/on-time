import React from 'react'
import Card from 'components/molecules/card'
import { FiPieChart, FiUser, FiCalendar } from 'react-icons/fi'

const Cards = () => (
  <div className="cards">
    <ul>
      <li>
        <Card icon={<FiUser />} title="Users" number="22" />
      </li>
      <li>
        <Card icon={<FiCalendar />} title="Registers" number="109" color="cyan" />
      </li>
      <li>
        <Card icon={<FiPieChart />} title="Activities" number="3" color="purple" />
      </li>
    </ul>
  </div>
)

export default Cards