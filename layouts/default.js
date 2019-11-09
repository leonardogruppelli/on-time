import React, { useEffect } from 'react'
import Head from 'next/head'
import Sidebar from 'components/organisms/sidebar'
import Main from 'components/organisms/main'
import Header from 'components/organisms/header'
import Login from 'components/pages/login'
import useGetters from 'store/getters'
import useActions from 'store/actions'
import { withApollo } from 'client'
import 'assets/core.styl'

const Default = ({ children }) => {
  const { logged_in } = useGetters()
  const { login } = useActions()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user'))

    if (token) {
      login(user)
    }
  }, [])

  return (
    <div>
      <Head>
        <title>.on time</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Next Application made for management of employees point register"
        />
        <meta name="author" content="Leonardo Gruppelli" />
      </Head>
      {logged_in ? (
        <>
          <Header />
          <Sidebar />
          <Main>
            <div className="container">{children}</div>
          </Main>
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default withApollo(Default, {
  ssr: false
})
