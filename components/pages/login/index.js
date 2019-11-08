import React, { useState } from 'react'
import Logo from 'components/atoms/logo'
import useForm from 'react-hook-form'
import useActions from 'store/actions'

const Login = () => {
  const { register, errors, handleSubmit } = useForm()
  const [message, set_message] = useState("")
  const { login } = useActions()

  const auth = ({ email, password }) => {
    const user = {
      name: "Leonardo Gruppelli",
      image: "https://via.placeholder.com/150"
    }

    if (email == "leonardo.gruppelli@gmail.com" && password == "ontime") {
      login(user)
      return;
    }

    set_message("Invalid e-mail or password, try again...")
  }

  return (
    <div className="login__wrapper">
      <div className="login">
        <div className="login__content">
          <div className="login__image">
            <Logo />
          </div>

          <div className="login__form">
            <h1>Login</h1>

            <form onSubmit={handleSubmit(auth)}>
              <div className={`control ${errors.email && "control--error"}`}>
                <label>E-mail</label>
                <div className="control__input">
                  <input id="email" name="email" ref={register({ required: true, pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i })} />
                </div>
                <span>
                  {
                    errors.email
                      ? errors.email.type == "pattern"
                        ? 'inform a valid e-mail...'
                        : 'this field is required...'
                      : ''
                  }
                </span>
              </div>

              <div className={`control ${errors.password && "control--error"}`}>
                <label>Password</label>
                <div className="control__input">
                  <input id="password" type="password" name="password" ref={register({ required: true, minLength: 5 })} />
                </div>
                <span>
                  {
                    errors.password
                      ? errors.password.type == "minLength"
                        ? 'the password must have at least 5 characters...'
                        : 'this field is required...'
                      : ''
                  }
                </span>
              </div>

              {
                message && <span className="login__error">{message}</span>
              }

              <button type="submit" className="btn bg-salmon">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login