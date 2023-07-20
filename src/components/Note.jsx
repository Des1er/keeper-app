import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  return (
    <div className="note">
      <h1 name = "title">{props.title}</h1>
      <p name  = "content">{props.content}</p>
      <button
        onClick={() => {
          props.deleteNote(props.id, props.title, props.content);
        } 
      }
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
