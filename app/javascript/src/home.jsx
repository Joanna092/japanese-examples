// home.jsx
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";
import logo from "./corona.jpg";
import BigSearch from "./big_search";

import "./styles.scss";
import "./home.scss";

const Home = () => (
  <Layout>
    <BigSearch />
    <div class="main-container">
      <div class="content">
        <div class="container">
          <div class="text-center main-examples">
            <div className="title">
              <p>Example of the week</p>
            </div>
            <div className="row">
              <div className="col-7">
                <div className="example_box">
                  <h1>
                    <span>Example</span>
                  </h1>
                  <div>
                    <p className="float-left">
                      Example: 駆逐（くちく）してやる！ / Kuchiku shite yaru!
                    </p>
                    <p>Translation: I will exterminate you</p>
                    <img className="img-fluid border" src={logo} alt="Logo" />
                    <p>
                      Full context: https://www.pixiv.net/en/artworks/81119676
                    </p>
                  </div>

                  <div className="row">
                    <div className="col">
                      5
                      <a>
                        <i class="far fa-thumbs-up"></i>
                      </a>
                      130
                      <a>
                        <i class="far fa-thumbs-down"></i>
                      </a>
                    </div>

                    <div className="col-auto">
                      <p>Added by: Joanna092</p>
                    </div>
                  </div>

                  <textarea rows="4" className="boxsizingBorder">
                    Type your comment here
                  </textarea>
                  <div class="comment">
                    <hr></hr>
                    <div class="author">
                      <a>Frank</a>
                    </div>
                    <div class="text">
                      Nice piece. Very well thought out! I can tell you've spent
                      a lot of time thinking about this.
                    </div>
                    <div class="actions">
                      <a class="reply">Reply</a>
                    </div>
                  </div>
                  <div class="comment">
                    <hr></hr>
                    <a class="author">John</a>
                    <div class="text">
                      I agree with Frank, it's very well thought out.
                    </div>
                    <div class="actions">
                      <a class="reply">Reply</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-5">
                <div className="example_box">
                  <h1>
                    <span>About the word</span>
                  </h1>
                  <p>Word: 駆逐 / くちく / kuchiku</p>
                  <p>Noun, suru-verb</p>
                  <p>JLPT level: N2</p>
                  <p>Meaning: extermination; expulsion; destruction​</p>
                  <button
                    type="button"
                    class="btn btn-outline-dark"
                    style={{
                      display: "block",
                      margin: "0 auto",
                      marginBottom: "15px",
                    }}
                  >
                    See more examples with this word
                  </button>
                </div>
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  style={{
                    display: "block",
                    margin: "0 auto",
                    padding: "20px",
                    marginTop: "20px",
                    width: "100%",
                  }}
                >
                  Add your own example
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sidebar shadow-3 p-3 mb-5 bg-custom rounded">
        <div class="text-center">
          <div className="sidebar_header">
            <h1>
              <span>New examples</span>
            </h1>

            <div>
              <h5>1</h5>
              <p>Word: 駆逐 / くちく / kuchiku</p>
              <p>Example: 駆逐（くちく）してやる！ / Kuchiku shite yaru!</p>
              <p>Translation: I will exterminate you</p>
              <img className="img-fluid" src={logo} alt="Logo" />
              <small>6.10.2021</small>
              <hr></hr>
            </div>

            <div>
              <h5>2</h5>
              <p>Word: 駆逐 / くちく / kuchiku</p>
              <p>Example: 駆逐（くちく）してやる！ / Kuchiku shite yaru!</p>
              <p>Translation: I will exterminate you</p>
              <hr></hr>
              <small>1.10.2021</small>
            </div>

            <button
              type="button"
              class="btn btn-outline-dark"
              style={{
                display: "block",
                margin: "0 auto",
                marginBottom: "15px",
              }}
            >
              See all
            </button>
          </div>

          <div className="xsidebar">
            <h1>
              <span>Most liked examples</span>
            </h1>

            <div>
              <h5>1</h5>
              <p>Word: 駆逐 / くちく / kuchiku</p>
              <p>Example: 駆逐（くちく）してやる！ / Kuchiku shite yaru!</p>
              <p>Translation: I will exterminate you</p>
              <small>6.10.2021</small>
              <hr></hr>
            </div>

            <div>
              <h5>2</h5>
              <p>Word: 駆逐 / くちく / kuchiku</p>
              <p>Example: 駆逐（くちく）してやる！ / Kuchiku shite yaru!</p>
              <p>Translation: I will exterminate you</p>
              <hr></hr>
              <small>1.10.2021</small>
            </div>

            <button
              type="button"
              class="btn btn-outline-dark"
              style={{
                display: "block",
                margin: "0 auto",
                marginBottom: "15px",
              }}
            >
              See all
            </button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement("div"))
  );
});
