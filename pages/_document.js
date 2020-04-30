import Document, { Head, Html, Main, NextScript } from 'next/document'
import favicon16 from 'images/favicon/favicon-16x16.png'
import favicon32 from 'images/favicon/favicon-32x32.png'
import favicon48 from 'images/favicon/favicon.ico'

import React from 'react'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
          <link rel="icon" type="image/png" sizes="48x48" href={favicon48} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
