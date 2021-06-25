import { useState, useEffect } from "react"

import Layout from "../components/Layout"
import Piano from "../components/Piano"
import Card from "../components/Card"

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
    if (note === userNote || notesAreEquivalent(note, userNote)) setRandomNote()
  }

  useEffect(() => setRandomNote(), [])

  return (
    <Layout>
      <Card>{note}</Card>
      <Piano noArrows correctNote={note} onClick={onClick} />
    </Layout>
  )
}

export default Notes
