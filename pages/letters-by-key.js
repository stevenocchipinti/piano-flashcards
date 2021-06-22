import { useState, useEffect } from "react"

import Layout from "../components/Layout"
import Piano from "../components/Piano"
import { WhiteButtons, BlackButtons } from "../components/Buttons"

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
    if (key === userKey) setRandomKey()
  }

  useEffect(() => setRandomKey(), [])

  return (
    <Layout>
      <Piano arrow={key} />
      {isWhiteKey ? (
        <WhiteButtons correctKey={key} onClick={onClick} />
      ) : (
        <BlackButtons correctKey={key} onClick={onClick} />
      )}
    </Layout>
  )
}

export default Keys
