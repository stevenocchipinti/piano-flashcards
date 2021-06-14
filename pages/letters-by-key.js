import styled from "styled-components"
import Head from "next/head"
import Piano from "../components/Piano"
import { WhiteButtons, BlackButtons } from "../components/Buttons"
import { useState, useEffect } from "react"

const Main = styled.main``

const whiteKeys = ["a", "b", "c", "d", "e", "f", "g"]
const blackKeys = ["a-sharp", "c-sharp", "d-sharp", "f-sharp", "g-sharp"]
const keys = [...whiteKeys, ...blackKeys]

const Keys = () => {
  const [key, setKey] = useState("c")

  const setRandomKey = () => {
    const otherKeys = keys.filter(k => k !== key)
    const nextKey = otherKeys[(Math.random() * otherKeys.length) | 0]
    setKey(nextKey)
  }
  const isWhiteKey = whiteKeys.includes(key)

  const onClick = userKey => {
    if (key === userKey) {
      console.log("Correct")
      setRandomKey()
    } else {
      console.log("Incorrect")
    }
  }

  useEffect(() => setRandomKey(), [])

  return (
    <>
      <Head>
        <title>Piano keys</title>
        <meta name="description" content="Train your visual memory for piano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Piano arrow={key} />
        {isWhiteKey ? (
          <WhiteButtons onClick={onClick} />
        ) : (
          <BlackButtons onClick={onClick} />
        )}
      </Main>
    </>
  )
}

export default Keys
