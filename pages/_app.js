import React from 'react'
import App from 'next/app'
import Page from 'layouts/default'
import 'assets/core.styl'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    )
  }
}