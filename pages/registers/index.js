import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import REGISTERS from 'database/query/registers'

const Registers = () => {
  const { data, loading, error } = useQuery(REGISTERS)

  return (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>User</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td>loading...</td>
          </tr>
        ) : (
          data.allRegisteredTime.map(register => (
            <tr key={register.id}>
              <td>{register.registered_time}</td>
              <td>{register.user.name}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}

export default Registers
