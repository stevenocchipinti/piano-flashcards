import styled from "styled-components"
import Head from "next/head"
import { useState, useEffect } from "react"

import Piano from "../components/Piano"
import Card from "../components/Card"

const Main = styled.main``

const naturalNotes = ["a", "b", "c", "d", "e", "f", "g"]
const sharpNotes = ["a-sharp", "c-sharp", "d-sharp", "f-sharp", "g-sharp"]
const flatNotes = ["a-flat", "b-flat", "d-flat", "e-flat", "g-flat"]
const notes = [...naturalNotes, ...sharpNotes, ...flatNotes]

const equivalentNotes = {
  "a-sharp": "b-flat",
  "c-sharp": "d-flat",
  "d-sharp": "e-flat",
  "f-sharp": "g-flat",
  "g-sharp": "a-flat",
  "a-flat": "g-sharp",
  "b-flat": "a-sharp",
  "d-flat": "c-sharp",
  "e-flat": "d-sharp",
  "g-flat": "f-sharp",
}
const notesAreEquivalent = (note1, note2) => equivalentNotes[note1] === note2

const Notes = () => {
  const [note, setNote] = useState("c")

  const setRandomNote = () => {
    const otherNotes = notes.filter(n => n !== note)
    const nextNote = otherNotes[(Math.random() * otherNotes.length) | 0]
    setNote(nextNote)
  }

  const onClick = userNote => {
    if (note === userNote || notesAreEquivalent(note, userNote)) {
      console.log("Correct")
      setRandomNote()
    } else {
      console.log("Incorrect")
    }
  }

  useEffect(() => setRandomNote(), [])

  return (
    <>
      <Head>
        <title>Piano notes</title>
        <meta name="description" content="Train your visual memory for piano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Card>{note}</Card>
        <Piano onClick={onClick} />
      </Main>
    </>
  )
}

export default Notes
