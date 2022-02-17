// home.jsx
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";
import { useState } from "react";

import "./styles.scss";
import "./new_example.scss";

function NewExample() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  }

  return (
      <Layout>
          <div className="main-container">
          <header>
          <h1>Add your own example</h1>
        </header>
    <form class="form" onSubmit={handleSubmit}>

        <div className="input_text">
        <input 
          type="text" 
          placeholder="Word"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
      </div>

      <div className="input_text">
        <input 
          type="text" 
          placeholder="Sentence"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
     
      </div>

      <div className="input_text">
        <input 
          type="text" 
          placeholder="Source"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
     
      </div>

  <div className="wrapper">
    <div className="div1">
      <label>Picture:</label>
      </div>
      <div className="div2">
        <input 
          type="file" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
 </div>
    
      <div>
      <input type="submit" class="form_button" value="Submit" />
      </div>

    </form>
    </div>

    </Layout>
  )
}


document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <NewExample />,
    document.body.appendChild(document.createElement("div"))
  );
});
