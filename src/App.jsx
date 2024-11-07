import { useRef, useState } from 'react'
import s from './App.module.css'
import { Note } from './components/Note/Note'
import { List } from './components/List/List'

let arr = []

function App() {
  let [notes, setNotes] = useState(arr)
  let [index, setIndex] = useState(-1)
  let ref = useRef(null)
  
  return (
    <>
    <h1>NOTEBOOK</h1>
    <div lassName={s.div}>
      <Note refa={ref} notes={notes} setNotes={setNotes} index={index}/>
      <List refa={ref} notes={notes} setIndex={setIndex}/>
    </div>
    </>
  )
}

export default App
