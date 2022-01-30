import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";
import logo from "./corona.jpg";
import "./styles.scss";
import "./signup.scss";

function Signup() {
  return (
    <Layout>
       Signup
    </Layout>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Signup />,
    document.body.appendChild(document.createElement("div"))
  );
});
