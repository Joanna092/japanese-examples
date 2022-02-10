import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";
import logo from "./corona.jpg";
import "./styles.scss";
import "./login.scss";

function Login() {
  return (
    <Layout>
      <div className="main-container">
        <header>
          <h2>Welcome back!</h2>
          <p>Please enter your login and password</p>
        </header>

        <form class="form">
          <div class="input_text">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
            />
          </div>

          <div class="input_text">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>

          <br />

          <div class="button_field">
            <button type="submit" name="btn_submit" class="form_button">
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Login />,
    document.body.appendChild(document.createElement("div"))
  );
});
