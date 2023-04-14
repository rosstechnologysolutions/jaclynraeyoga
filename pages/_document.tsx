import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Jaclyn Rae Yoga Website" />
        <meta name="keywords" content="yoga, prenatal, pregnant, baby, babies, mom, mother, group, private, lessons, group, classes, wellness, mindful, teacher, shanti, health, education, specialist"/>
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
