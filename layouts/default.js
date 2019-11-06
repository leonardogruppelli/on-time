import React from 'react'
import Head from 'next/head'
import Header from 'components/header'
import Footer from 'components/footer'

const Default = ({ children }) => (
  <div>
    <Head>
      <title>.on time</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
)

export default Default