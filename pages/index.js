import styled from "styled-components"
import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Piano flash cards</title>
        <meta name="description" content="Train your visual memory for piano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Piano Flashcards</h1>
      </main>
    </div>
  )
}
