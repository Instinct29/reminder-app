import React from 'react'

const Note = (props) => {
  var time = new Date().toLocaleTimeString();
  var date = new Date().toLocaleDateString();


  const handleClick = () => {
    props.deleteNote(props.id)
  }


  return (
    <div className='note'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <p>Time: {time}</p>
        <p>Date: {date}</p>

        <button onClick={handleClick}>DELETE</button>

    </div>
  )
}

export default Note;