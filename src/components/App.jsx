import React, { useState }from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
    const [notes, setNotes] = useState([]);

      fetch("http://localhost:3000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));

  function addNote(newNote) {
    setNotes((prev) => {
      return [...prev, newNote];
    }); 
  }

  function deleNote(id,title,content) {
    setNotes((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
    var url = 'http://localhost:3000/notes';
    axios.delete(url,{ data: { title: title, content: content} });
  }

  return (
    <div>
      <Header />
      <CreateArea addN={addNote} />
      {notes.map((note, id) => (
        <Note
          key={id}
          id={id}
          deleteNote={deleNote}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;


