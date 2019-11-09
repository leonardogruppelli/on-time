import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import USERS from 'database/query/users'
// import { FiEdit2, FiTrash } from 'react-icons/fi'
import Link from 'next/link'
import axios from 'axios'

const Users = () => {
  const { data, loading, error } = useQuery(USERS)

  return (
    <div>
      <Link href="/register">
        <a className="btn bg-cyan">Register user</a>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th className="mobile">Role</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td>loading...</td>
            </tr>
          ) : (
            data.allUsers.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td className="mobile">{user.email}</td>
                <td className="mobile">{user.role}</td>
                {/* <td className="actions">
                  <FiEdit2 className="c-yellow" />
                  <FiTrash className="c-red" />
                </td> */}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Users
