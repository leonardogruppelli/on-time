import React from 'react'
import Head from 'next/head'
import Sidebar from 'components/organisms/sidebar'
import Main from 'components/organisms/main'
import Header from 'components/organisms/header'
import Login from 'components/pages/login'
import useGetters from 'store/getters'

const Default = ({ children }) => {
  const { logged_in } = useGetters()

  return (
    <div>
      <Head>
        <title>.on time</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name="description" content="Next Application made for management of employees point register" />
        <meta name="author" content="Leonardo Gruppelli" />
      </Head>
      {
        logged_in
          ?
          <>
            <Header />
            <Sidebar />
            <Main>
              <div className="container">
                {children}
              </div>
            </Main>
          </>
          :
          <Login />
      }
    </div>
  )
}

export default Default