import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import styled from "styled-components"

import { Button } from "../components/Buttons"

const Header = styled.header`
  background-color: black;
  padding-top: 1rem;
  h1 {
    text-align: center;
    color: white;
    margin-top: 1rem;
  }
`

const Main = styled.main`
  padding: 1rem;
`

const Buttons = styled.div`
  font-size: 1.25rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
`

const ButtonLink = styled(Button).attrs({ as: "a" })`
  text-decoration: none;
  display: block;
  padding: 1rem;
  margin-top: 1rem;
  position: relative;
`

const Symbols = styled.span`
  position: absolute;
  right: 1rem;
  display: inline-block;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Piano flash cards</title>
        <meta name="description" content="Train your visual memory for piano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <h1>Piano Flashcards</h1>
        {/*<!-- Photo by <a href="https://unsplash.com/@jplenio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Johannes Plenio</a> on <a href="https://unsplash.com/s/photos/piano?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> -->*/}
        <Image src="/piano.jpg" width={1920} height={1080} />
      </Header>

      <Main>
        <h2>What would you like the practice today?</h2>

        <Buttons>
          <Link href="/letters-by-key" passHref>
            <ButtonLink>
              <Symbols>🎹 → 🅰️ </Symbols>Letters by key
            </ButtonLink>
          </Link>
          <Link href="/keys-by-letter" passHref>
            <ButtonLink>
              <Symbols>🅰️ → 🎹</Symbols>Keys by letters
            </ButtonLink>
          </Link>
          <Link href="/keys-by-staff" passHref>
            <ButtonLink>
              <Symbols>♩ → 🎹</Symbols> Keys by staff
            </ButtonLink>
          </Link>
        </Buttons>
      </Main>
    </>
  )
}
