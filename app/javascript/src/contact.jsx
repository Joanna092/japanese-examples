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

     <div>
    <label className="data">Name</label>
    <input type="text" name="name" placeholder="Your name.."/>
    </div> 

    <div> 
    <label className="data">Email</label>
    <input type="text" name="email" placeholder="Your email.."/>
    </div> 

    <label>Your question or feedback</label>
    <textarea id="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>

    <input type="submit" value="Submit"/>
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
