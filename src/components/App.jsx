import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {


  const [note,setnote] = useState([]);

  function addnote(newnote)
  {
    setnote(prev => [...prev,newnote])
  }

  function deletenote(id)
  {
    setnote(prevnote => 
      {
        return prevnote.filter((noteitem,index) => 
        {
          return index !== id;
        })
      })
  }
  return (
    <div>
      <Header />
      
      <CreateArea onAdd={addnote}  />
      
      {
        note.map((n,index) => 
          {
              return  (<Note  title={n.title} 
                content={n.content} 
                delete={deletenote} 
                key={index} 
                id={index} />)
          })
      }
      
      <Footer />
    </div>
  );
}

export default App;
