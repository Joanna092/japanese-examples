import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";
import logo from "./corona.jpg";
import "./styles.scss";
import "./contact.scss";

function Contact() {
  return (
    <Layout>
    contact
    </Layout>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Contact />,
    document.body.appendChild(document.createElement("div"))
  );
});
