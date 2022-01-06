// home.jsx
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";
import logo from "./corona.jpg";

import "./styles.scss";
import "./search.scss";
import SmallSearch from "./small_search";

const Search = () => (
  <Layout>
    <SmallSearch />
    <div class="main-container">
      <h1>私</h1>
      <p>わたし、watashi, me</p>
      <p>pronoun, level 1</p>

      <p>Sample sentences:</p>
      <p>
        騒（さわ）がしいホームで誰（だれ）かが私（わたし）の名前（なまえ）を呼（よ）んでいるのが聞（き）こえた。
      </p>
      <p>
        Sawagashii houmu de dare ka ga watashi no namae wo yonde iru no ga
        kikoeta.
      </p>
      <p>I could hear someone calling my name on the noisy platform.</p>
      <img className="thumbnail border" src={logo} alt="Logo" />

      <p>Source: xxx</p>
      <p>Added by: xxx</p>

      <button
        type="button"
        class="btn btn-outline-dark"
        style={{
          display: "block",
       
          marginBottom: "15px",
        }}
      >
        See all examples
      </button>

      <button
        type="button"
        class="btn btn-outline-dark"
        style={{
          display: "block",
       
          marginBottom: "15px",
        }}
      >
        Add own example
      </button>

      <hr style={{width:"40%"}}></hr>

    </div>
  </Layout>
);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Search />,
    document.body.appendChild(document.createElement("div"))
  );
});
