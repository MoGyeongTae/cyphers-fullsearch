import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { Store } from 'redux';
import appStore from '../store';

interface AppProps {
  store: Store;
}

class MyApp extends App<AppProps> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <>
        <Head>
          <title>Cyphers - Full Search</title>
        </Head>
        <Provider store={store}>
          {/* eslint-disable-next-line */}
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default withRedux(appStore)(MyApp);
