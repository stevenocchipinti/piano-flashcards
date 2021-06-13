import styled from "styled-components"
import Link from "next/link"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Piano flash cards</title>
        <meta name="description" content="Train your visual memory for piano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Piano Flashcards</h1>

        <h2>What would you like the practice today?</h2>

        <Link href="/keys">
          <a>Piano keys</a>
        </Link>
      </main>
    </>
  )
}
