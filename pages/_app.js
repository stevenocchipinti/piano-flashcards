import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html, body, h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: #171923;
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
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
