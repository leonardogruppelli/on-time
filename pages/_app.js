import React from 'react'
import App from 'next/app'
import Page from 'layouts/default'
import { Provider } from 'react-redux'
import { Store } from 'store'
import 'assets/core.styl'

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Provider store={Store}>
      <Page>
        <Component {...pageProps} />
      </Page>
      </Provider>
    )
  }
}

export default MyApp