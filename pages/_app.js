import { createGlobalStyle } from "styled-components"
import Head from "next/head"

import "@fontsource/raleway/100.css"
import "@fontsource/antic-didone/400.css"

import CssReset from "../components/CssReset"

const GlobalStyle = createGlobalStyle`
  :root {
    --text: #2d2d2d;

    --background: #e5e5e5;
    --header-background: rgba(255, 255, 255, 1);
    --logo-background: rgba(255, 255, 255, 0.5);
    --card-background: #fff;
    --gradient-background: linear-gradient(
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.5)
    );

    --shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    --white-keys: #fff;
    --black-keys: #000;
    --success: #68D391;
    --fail: #FC8181;
  }

  html.dark {
    --text: #d8d8d8;

    --background: #121212;
    --header-background: rgba(27, 27, 27, 0.5);
    --logo-background: rgba(27, 27, 27, 0.5);
    --card-background: #222;
    --gradient-background: linear-gradient(
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.5)
    );

    --shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    --white-keys: #bbb;
    --black-keys: #222;
    --success: #68D391;
    --fail: #FC8181;
  }

  html, body {
    font-family: "Raleway";
    -webkit-font-smoothing: antialiased;
    color: var(--text);
  }

  body {
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
  }
`

const App = ({ Component, pageProps }) => (
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
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
