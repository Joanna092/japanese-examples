import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";
import logo from "./corona.jpg";
import "./styles.scss";
import "./signup.scss";

function Signup() {
  return (
    <Layout>
    <div className="main-container">
      <header>
        <h2>Sign up</h2>
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
            type="text"
            id="email"
            name="email"
            placeholder="Email"
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

        <div class="input_text">
          <input
            type="password"
            id="password_repeat"
            name="password_repeat"
            placeholder="Type your password again"
          />
        </div>

        <br />

        <div class="button_field">
          <button type="submit" name="btn_submit" class="form_button">
            SIGNUP
          </button>
        </div>
      </form>
    </div>
  </Layout>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Signup />,
    document.body.appendChild(document.createElement("div"))
  );
});
