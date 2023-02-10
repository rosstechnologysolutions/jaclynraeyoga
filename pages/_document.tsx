import { Html, Head, Main, NextScript } from 'next/document'
import NavBar from '../components/navbar/navbar'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <NavBar />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
