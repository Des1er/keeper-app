import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import Axios from "axios";


function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setCont] = useState("");
  const [isExpanded, setExpanded] = useState(false);

  const handleOnSubmit = async (e) =>{
    e.preventDefault();
    props.addN({
      title: title,
      content: content
    });

    var data = {
      title: title,
      content: content
    };

  var url = 'http://localhost:3000/notes';
    Axios.post(url,data);       
      setCont("");
      setTitle("");
   
    };
  function expand() {
    setExpanded(true);
  }

  function titleChange(event) {
    const newValue = event.target.value;
    setTitle(newValue);
  }
  function contChange(event) {
    const newValue = event.target.value;
    setCont(newValue);
  }

  return (
    <div>
      <form className="create-note" action="" >
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            value={title}
            onChange={titleChange}
          />
        )}

        <textarea
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={content}
          onChange={contChange}
        />
        <Zoom in={isExpanded}>
          <Fab 
            onClick={handleOnSubmit}           
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
