import React, { useState, useEffect } from 'react'
import { FiEdit2, FiTrash } from 'react-icons/fi'
import axios from 'axios'

const Users = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const get = async () => {
      try {
        const { data } = await axios.get('data/users.json')

        setUsers(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    get()
  }, [])

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th className="mobile">Role</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          loading
            ?
            <tr>
              <td>loading...</td>
            </tr>
            :
            users.map(user =>
              <tr key={user.id}>
                <td>{user.name}</td>
                <td className="mobile">{user.role}</td>
                <td className="actions">
                  <FiEdit2 className="c-yellow" />
                  <FiTrash className="c-red" />
                </td>
              </tr>
            )
        }
      </tbody>
    </table>
  )
}

export default Users