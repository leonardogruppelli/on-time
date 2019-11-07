import React from 'react'
import Head from 'next/head'
import Sidebar from 'components/organisms/sidebar'
import Main from 'components/organisms/main'
import Header from 'components/organisms/header'
import { Provider } from 'react-redux'
import { Store } from 'store'

const Default = ({ children }) => (
  <div>
    <Head>
      <title>.on time</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name="description" content="Next Application made for management of employees point register" />
      <meta name="author" content="Leonardo Gruppelli" />
    </Head>
    <Provider store={Store}>
      <Header />
      <Sidebar />
      <Main>
        <div className="container">
          {children}
        </div>
      </Main>
    </Provider>
  </div>
)

export default Default