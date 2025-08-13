import Link from "next/link"
import styled, { createGlobalStyle } from "styled-components"

import Logo from "../components/Logo"

const Header = styled.header`
  padding: 4rem 1rem 0 0;
  display: flex;
  justify-content: center;
  margin: 0 1rem 2rem;
`

const HeaderLink = styled.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Antic Didone";
`

const Heading = styled.h1`
  font-size: 2.25rem;
  margin-left: 1rem;
`

const Main = styled.main`
  padding: 1rem;
`

const Buttons = styled.div`
  font-size: 2rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  margin: auto;
`

const ButtonLink = styled.button.attrs({ as: Link })`
  background-color: var(--card-background);
  color: inherit;
  text-align: center;
  border-radius: 12px;
  box-shadow: var(--shadow);
  text-decoration: none;
  font-family: "Raleway";
  display: block;
  padding: 1rem;
  margin-top: 1rem;

  transition: 0.2s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
`

const GlobalStyle = createGlobalStyle`
  html {
    background: var(--gradient-background), url("/bg.jpg");
    background-size: cover;
  }
`

const Layout = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

export default function Home() {
  return (
    <Layout>
      <GlobalStyle />

      <Header>
        <HeaderLink href="/">
          <Logo css="max-height: 100px; max-width: 100px;" />
          <Heading>Piano Flashcards</Heading>
        </HeaderLink>
      </Header>

      <Main>
        <Buttons>
          <ButtonLink href="/letters-by-key">Letters by key</ButtonLink>
          <ButtonLink href="/keys-by-letter">Keys by letters</ButtonLink>
          <ButtonLink href="/keys-by-staff">Keys by staff</ButtonLink>
        </Buttons>
      </Main>
    </Layout>
  )
}
