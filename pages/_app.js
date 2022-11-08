import Head from 'next/head'
import useFoucFix from '/hooks/useFoucFix'
import Transition from 'components/transition'

import '../styles/base.scss'

function App({ Component, pageProps }) {
  useFoucFix()

  return (
    <>
      <Head>
        <title>Next @ Antinomy Studio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Transition Component={Component} pageProps={pageProps} />
    </>
  )
}

export default App
