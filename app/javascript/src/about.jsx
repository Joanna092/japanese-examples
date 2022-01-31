import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";
import "./styles.scss";
import "./about.scss";

function Contact() {
  return (
    <Layout>
      <header>
        <h3>About</h3>
      </header>
      <div className="description">
        <p>
          Here will be some information about author of the project,
          contributors, API used etc{" "}
        </p>
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
