import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';


function Note(props) {

function updatenote(event)
{ 
  props.delete(props.id);

}
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={updatenote}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
