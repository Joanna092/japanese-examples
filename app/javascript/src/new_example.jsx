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
          <div className="example_form">
          <h1>Add your own example</h1>
    <form onSubmit={handleSubmit}>

        <div className="input_field">
      <label>Word: </label>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
      </div>

      <div className="input_field">
      <label>Sentence: </label>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
     
      </div>

      <div className="input_field">
      <label>Source: </label>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
     
      </div>

      <div className="input_field">
      <label>Picture:</label>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      
      </div>

      <div>
      <input type="submit" class="btn btn-outline-dark" value="Submit" />
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
