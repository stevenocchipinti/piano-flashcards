import { createGlobalStyle } from "styled-components"
import Head from "next/head"

import "@fontsource/raleway/100.css"
import "@fontsource/antic-didone/400.css"

import CssReset from "../components/CssReset"

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: "Raleway";
    -webkit-font-smoothing: antialiased;
    color: #2d2d2d;
  }

  body {
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <CssReset />
      <GlobalStyle />
      <Head>
        <title>Piano flashcards</title>
        <meta name="description" content="Train your visual memory for piano" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
