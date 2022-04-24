// home.jsx
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";
import logo from "./corona.jpg";

import "./styles.scss";
import "./search.scss";
import SmallSearch from "./small_search";

class Search extends React.Component {
  constructor() {
    super();
    /*state = {
    }*/
    this.relocateExamples = this.relocateExamples.bind(this);
    this.relocateNew = this.relocateNew.bind(this);
  }

  relocateExamples() {
    window.location = "/examples";
  }

  relocateNew() {
    window.location = "/new_example";
  }

  render() {
    return (
      <Layout>
        <SmallSearch />
        <div class="main-container margin_side">
          <h2 class="left">Words: 2 found</h2>

          <div className="pink_border">

          <div class="wrapper left">
            <div class="box a">わたし、watashi, me</div>
            <div class="box b">
              <h1>私</h1>
            </div>
            <div class="box c">pronoun, level 1</div>
          </div>

          

          <div className="sample_sentences left right">
            <p>Sample sentence:</p>
            <p>
              騒（さわ）がしいホームで誰（だれ）かが私（わたし）の名前（なまえ）を呼（よ）んでいるのが聞（き）こえた。
            </p>
            <p>
              Sawagashii houmu de dare ka ga watashi no namae wo yonde iru no ga
              kikoeta.
            </p>
            <p>I could hear someone calling my name on the noisy platform.</p>
          </div>

          <div className="row left">
            <div className="col-5">
              <div class="row thumbail_box">
                <div class="col">
                  <img className="thumbnail border" src={logo} alt="Logo" />
                </div>
                <div class="col thumb_auth">
                  <p>Source: xxx</p>
                  <p>Added by: xxx</p>
                </div>
              </div>
            </div>

            <div className="col-7 thumb_auth">
              <button
                type="button"
                onClick={this.relocateExamples}
                class="search_button btn"
                style={{
                  display: "block",
                  marginBottom: "15px",
                }}
              >
                See all examples
              </button>

              <button
                type="button"
                onClick={this.relocateNew}
                class="search_button btn"
                style={{
                  display: "block",
                  marginBottom: "15px",
                }}
              >
                Add own example
              </button>
            </div>
          </div>
          </div>
   
<div className="pink_border">

          <div class="wrapper left">
            <div class="box a">わたし、watashi, me</div>
            <div class="box b">
              <h1>私</h1>
            </div>
            <div class="box c">pronoun, level 1</div>
          </div>

         

          <div className="sample_sentences left">
            <p>Sample sentence:</p>
            <p>
              騒（さわ）がしいホームで誰（だれ）かが私（わたし）の名前（なまえ）を呼（よ）んでいるのが聞（き）こえた。
            </p>
            <p>
              Sawagashii houmu de dare ka ga watashi no namae wo yonde iru no ga
              kikoeta.
            </p>
            <p>I could hear someone calling my name on the noisy platform.</p>
          </div>

          <div className="row left">
            <div className="col-5">
              <div class="row thumbail_box">
                <div class="col">
                  <img className="thumbnail border" src={logo} alt="Logo" />
                </div>
                <div class="col thumb_auth">
                  <p>Source: xxx</p>
                  <p>Added by: xxx</p>
                </div>
              </div>
            </div>

            <div className="col-7 thumb_auth">
              <button
                type="button"
                onClick={this.relocateExamples}
                class="search_button btn"
                style={{
                  display: "block",
                  marginBottom: "15px",
                }}
              >
                See all examples
              </button>

              <button
                type="button"
                class="search_button btn"
                onClick={this.relocateNew}
                style={{
                  display: "block",
                  marginBottom: "15px",
                }}
              >
                Add own example
              </button>
            </div>
          </div>
          </div>

        </div>
      </Layout>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Search />,
    document.body.appendChild(document.createElement("div"))
  );
});
