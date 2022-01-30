import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";
import logo from "./corona.jpg";
import "./styles.scss";
import "./login.scss";

function Login() {
  return (
    <Layout>
       Login
    </Layout>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Login />,
    document.body.appendChild(document.createElement("div"))
  );
});
