import Link from "next/link"
import styled, { createGlobalStyle } from "styled-components"

import Logo from "../components/Logo"

const Header = styled.header`
  padding-top: 4rem;
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

const ButtonLink = styled.button.attrs({ as: "a" })`
  background-color: white;
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
    background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.5)), url("/bg.jpg");
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
        <Link href="/" passHref>
          <HeaderLink>
            <Logo css="max-height: 100px; max-width: 100px;" />
            <Heading>Piano Flashcards</Heading>
          </HeaderLink>
        </Link>
      </Header>

      <Main>
        <Buttons>
          <Link href="/letters-by-key" passHref>
            <ButtonLink>Letters by key</ButtonLink>
          </Link>
          <Link href="/keys-by-letter" passHref>
            <ButtonLink>Keys by letters</ButtonLink>
          </Link>
          <Link href="/keys-by-staff" passHref>
            <ButtonLink>Keys by staff</ButtonLink>
          </Link>
        </Buttons>
      </Main>
    </Layout>
  )
}
