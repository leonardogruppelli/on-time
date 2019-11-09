import React, { useState } from 'react'
import Logo from 'components/atoms/logo'
import useForm from 'react-hook-form'
import { useMutation } from '@apollo/react-hooks'
import SIGN_UP from 'database/mutation/signup'
import useActions from 'store/actions'
import Router from 'next/router'

const Register = () => {
  const { register, errors, handleSubmit } = useForm()
  const [message, set_message] = useState('')
  const [mutate] = useMutation(SIGN_UP)

  const sign_up = async ({ name, email, password }) => {
    const { data } = await mutate({
      variables: {
        name,
        email,
        password
      }
    })

    if (data.createUser) {
      set_message('User successfully registered...')
      Router.push('/users')
      return
    }
  }

  return (
    <div className="login login--full">
      <div className="login__content">
        <div className="login__form">

          <form onSubmit={handleSubmit(sign_up)}>
            <div className={`control ${errors.name && 'control--error'}`}>
              <label>Name</label>
              <div className="control__input">
                <input
                  id="name"
                  name="name"
                  ref={register({
                    required: true
                  })}
                />
              </div>
              <span>{errors.name && 'this field is required...'}</span>
            </div>

            <div className={`control ${errors.email && 'control--error'}`}>
              <label>E-mail</label>
              <div className="control__input">
                <input
                  id="email"
                  name="email"
                  ref={register({
                    required: true,
                    pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
                  })}
                />
              </div>
              <span>
                {errors.email
                  ? errors.email.type == 'pattern'
                    ? 'inform a valid e-mail...'
                    : 'this field is required...'
                  : ''}
              </span>
            </div>

            <div className={`control ${errors.password && 'control--error'}`}>
              <label>Password</label>
              <div className="control__input">
                <input
                  id="password"
                  type="password"
                  name="password"
                  ref={register({ required: true, minLength: 5 })}
                />
              </div>
              <span>
                {errors.password
                  ? errors.password.type == 'minLength'
                    ? 'the password must have at least 5 characters...'
                    : 'this field is required...'
                  : ''}
              </span>
            </div>

            {message && <span className="login__success">{message}</span>}

            <button type="submit" className="btn bg-salmon">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
