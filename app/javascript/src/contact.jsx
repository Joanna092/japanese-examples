import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";
import "./styles.scss";
import "./contact.scss";

function Contact() {
  return (
    <Layout>
     <div className="main-container">
         <header>
    <h3>Contact Form</h3>
    </header>

<div class="container">
  <form className="form">

  <div class="input_text">
    <input type="text" name="name" placeholder="Your name"/>
    </div> 

    <div class="input_text">
    <input type="text" name="email" placeholder="Your email"/>
    </div> 

    <div class="input_text">
    <textarea 
    id="subject" 
    placeholder="Your question or feedback" 
    style={{height:"200px"}}
    >  
    </textarea>
    </div>

     <button type="submit" name="btn_submit" class="form_button">
              SUBMIT
            </button>
  </form>
</div>
</div>
    </Layout>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Contact />,
    document.body.appendChild(document.createElement("div"))
  );
});
