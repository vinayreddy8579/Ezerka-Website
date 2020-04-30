import 'assets/css/bootstrap.min.css'
import 'assets/css/icofont.min.css'
import 'node_modules/react-modal-video/scss/modal-video.scss'
import 'react-image-lightbox/style.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import 'assets/css/style.scss'
import 'assets/css/responsive.scss'
import 'assets/css/animate.css'

import { Preloader, Placeholder } from 'react-preloading-screen'
import App from 'next/app'

import { DefaultSeo } from 'next-seo'
import GoTop from 'components/Shared/GoTop'
import Loader from 'components/Shared/Loader'
import React from 'react'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <DefaultSeo
          title="Ezerka Technology Solutions"
          description="Ezerka Technology Solutions"
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: 'https://ezerka.in/',
            site_name: 'Ezerka Technology Solutions',
          }}
        />
        <Preloader className={'preloader'} >
          <Component {...pageProps} />
          <GoTop scrollStepInPx="50" delayInMs="16.66" />
          <Placeholder>
            <Loader />
          </Placeholder>
        </Preloader>
      </>
    )
  }
}
export default MyApp
