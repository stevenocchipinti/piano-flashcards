import styled, { createGlobalStyle } from "styled-components"
import Link from "next/link"
import Logo from "../Logo"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: var(--background);
  }
`

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background-color: var(--header-background);
  box-shadow: var(--shadow);
`

const HeaderLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Antic Didone";
`

const Heading = styled.h1`
  font-family: "Antic Didone";
  font-size: 1.5rem;
  margin-left: 1rem;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <HeaderLink href="/">
          <Logo height={42} width={42} />
          <Heading>Piano Flashcards</Heading>
        </HeaderLink>
      </Header>
      <Main>{children}</Main>
    </>
  )
}

export default Layout
