import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {


  const [tmp,settmp] = useState(false);

  const [item,setitem] = useState(
    {
      title : "",
      content : ""
    }
  );
  
  function update(event)
  {
    const {name,value} = event.target;
     
    setitem(prev => 
      {
       
        if(name === "title")
        {
          return (
            {
 
              title : value,
              content : prev.content
            }
          )
        }
        
        else if(name === "content")
        {
          return (
            {

              title : prev.title,
              content : value
            }
          )
        }
      
      })
  }

  function updatenote(event)
  {

    props.onAdd(item);
    setitem(
      {
        title : "",
        content : ""
      }
    )
    event.preventDefault();
  }

  function expand()
  {
    settmp(true);
  }

  return (
    <div>
      
      <form>
        { tmp ? 
        <input name="title" 
        placeholder="Title"
        onChange={update}
        autoComplete="off"
        value={item.title} 
        /> :
        null
        }

        <textarea 
        name="content" 
        placeholder="Take a note..."
        rows={tmp ? 3 : 1}
        onChange={update}
        onClick={expand} 
        value={item.content}
        />

        <Zoom in={tmp}>
        <Fab className="button"
         onClick={updatenote}>

           <AddIcon />

        </Fab>

        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
