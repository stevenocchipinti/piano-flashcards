import { useState, useEffect } from "react"

import Layout from "../components/Layout"
import Card from "../components/Card"
import Piano from "../components/Piano"
import Staff from "../components/Staff"

const trebleNotes = {
  "treble-b3": "b",
  "treble-c4": "c",
  "treble-d4": "d",
  "treble-e4": "e",
  "treble-f4": "f",
  "treble-g4": "g",
  "treble-a4": "a",
  "treble-b4": "b",
  "treble-c5": "c",
  "treble-d5": "d",
  "treble-e5": "e",
  "treble-f5": "f",
  "treble-g5": "g",
  "treble-a5": "a",
  "treble-b5": "b",
}
const bassNotes = {
  "bass-d2": "d",
  "bass-e2": "e",
  "bass-f2": "f",
  "bass-g2": "g",
  "bass-a2": "a",
  "bass-b2": "b",
  "bass-c3": "c",
  "bass-d3": "d",
  "bass-e3": "e",
  "bass-f3": "f",
  "bass-g3": "g",
  "bass-a3": "a",
  "bass-b3": "b",
  "bass-c4": "c",
  "bass-d4": "d",
}
const equivalentNotes = { ...trebleNotes, ...bassNotes }
const notes = Object.keys(equivalentNotes)

const notesAreEquivalent = (note1, note2) => equivalentNotes[note1] === note2

const Notes = () => {
  const [note, setNote] = useState("treble-c4")

  const setRandomNote = () => {
    const otherNotes = notes.filter(n => n !== note)
    const nextNote = otherNotes[(Math.random() * otherNotes.length) | 0]
    setNote(nextNote)
  }

  const onClick = userNote => {
    if (notesAreEquivalent(note, userNote)) setRandomNote()
  }

  useEffect(() => setRandomNote(), [])

  return (
    <Layout>
      <Card>
        <Staff note={note} />
      </Card>
      <Piano noArrows correctNote={equivalentNotes[note]} onClick={onClick} />
    </Layout>
  )
}

export default Notes
