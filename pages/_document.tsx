import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Jaclyn Rae Yoga Website" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/logo.webp" />
      </Head>
      <NavBar />
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  )
}
