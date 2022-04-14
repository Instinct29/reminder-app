import React,{useState} from 'react'
import Note from "./components/Note";
import Header from './components/Header.js'
import Footer from "./components/Footer.js"
import CreateArea from "./components/CreateArea"



function App() {
  const [notes, setNotes] = useState([])
  const addNote =(newNote)=>{
    setNotes(
      prevNote => {
        return ( [...prevNote,newNote])
 
      }
    )
  }

  const deleteNote = (id) => {
    // console.log("delete note was triggered")
    setNotes(
      prevNotes => {
        return prevNotes.filter((noteItem, index) => {
          return index !==id;
        })
      }
    )
  }


  return (
    <>
    <Header />
    <CreateArea addNote={addNote}/>
    {
      notes.map((note,index)=>{
        return <Note key={index} id={index} title = {note.title} content = {note.content} deleteNote={deleteNote} />
      })
    }
    <Footer />

   
    </>
   
 
  );
}

export default App;
