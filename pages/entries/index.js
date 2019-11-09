import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'
import REGISTER from 'database/mutation/register'

const Entries = () => {
  const [id, set_id] = useState(0)
  const [mutate] = useMutation(REGISTER)
  const [registered, set_registered] = useState(0)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    set_id(user.id)
  }, [])

  const register = async () => {
    const { data } = await mutate({
      variables: {
        id
      }
    })
  }

  return (
    <button className="btn bg-red" onClick={() => register()}>
      Register
    </button>
  )
}

export default Entries
