import React from 'react'
import Head from 'next/head'
import Sidebar from 'components/sidebar'
import Main from 'components/main'
import Header from 'components/header'
import { Provider } from 'react-redux'
import { Store } from 'store'

const Default = ({ children }) => (
  <div>
    <Head>
      <title>.on time</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Provider store={Store}>
      <Sidebar />
      <Main>
        <Header />
        <div className="container">
          {children}
        </div>
      </Main>
    </Provider>
  </div>
)

export default Default