import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

interface Props {
  styleTags: any;
}

export default class MyCustomDocument extends Document<Props> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags }; // return styles collected
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.styleTags}
          <style>
            {`
          @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
          * {
            margin:0;
            padding:0;
            list-style:none;
            text-decoration:none;
            font-family: Spoqa Han Sans, Spoqa Han Sans JP, Sans-serif;
            box-sizing:border-box;
          }
          @media all and (max-width:768px) {
            html, body {
              font-size:15px;
            }
          }
          @media all and (max-width:420px) {
            html, body {
              font-size:14px;
            }
          }
        `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
