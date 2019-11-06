import React from 'react'
import Head from 'next/head'
import Header from 'components/header'
import Footer from 'components/footer'
import { Provider } from 'react-redux'
import { Store } from 'store'

const Default = ({ children }) => (
  <div>
    <Head>
      <title>.on time</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Provider store={Store}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </Provider>
  </div>
)

export default Default