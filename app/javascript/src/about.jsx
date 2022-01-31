import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";
import logo from "./corona.jpg";
import "./styles.scss";
import "./about.scss";

function Contact() {
  return (
    <Layout>
    about
    </Layout>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Contact />,
    document.body.appendChild(document.createElement("div"))
  );
});
