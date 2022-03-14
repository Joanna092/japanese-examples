// home.jsx
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";
import logo from "./corona2.jpg";
import BigSearch from "./big_search";

import "./styles.scss";
import "./home.scss";

const Home = () => (
  <Layout>
    <BigSearch />
    <div class="main-container gradient">
      <div className="text-align">
        <button type="button" class="example_button btn active">
          Example of the week
        </button>
        <button type="button" class="example_button btn">
          New examples
        </button>
        <button type="button" class="example_button btn">
          Most liked examples
        </button>
      </div>

      <div class="container remove-right-margin">
        <div class="text-center main-examples">
          <div className="title">Example of the week</div>

          <div className="row">
            <div className="col-7">
              <div className="example_box shadow-md">
                <h1>Example</h1>
                <div>
                  <p className="float-left">


                  <table>
  <tr>
    <th>Example:</th>
    <td> <ruby>
                      駆逐 <rp>(</rp> <rt>くちく</rt>
                      <rp>)</rp>
                    </ruby>
                    してやる！ / Kuchiku shite yaru!</td>
  </tr>
  <tr>
  <th>Translation:</th>
    <td>I will exterminate you</td>
  </tr>
  </table>

                  </p>
               
                  <img
                    className="img-fluid border example_image"
                    src={logo}
                    alt="Logo"
                  />
                  <p>
                    <b>Full context:</b> https://www.pixiv.net/en/artworks/81119676
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
                    Nice piece. Very well thought out! I can tell you've spent a
                    lot of time thinking about this.
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
              <div className="example_box shadow-md">
                <h1>About the word</h1>

                <table>
  <tr>
    <th>Word:</th>
    <td> <ruby>
                      駆逐 <rp>(</rp> <rt>くちく</rt>
                      <rp>)</rp>
                    </ruby>
                     / kuchiku</td>
  </tr>
  <tr>
  <th>Type of word:</th>
    <td>Noun, suru-verb</td>
  </tr>

  <tr>
  <th>JLPT level:</th>
    <td>N2</td>
  </tr>

  <tr>
  <th>Meaning:</th>
    <td>extermination; expulsion; destruction​</td>
  </tr>

  </table>



                <button
                  type="button"
                  class="form_button page_content"
                  style={{
                    display: "block",
                    margin: "0 auto",
                    marginBottom: "15px",
                    marginTop: "17px"
                  }}
                >
                  See more examples with this word
                </button>
              </div>
              <button
                type="button"
                class="form_button page_content"
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

      {/*
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

          <div className="sidebar_header">
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

      */}
    </div>
  </Layout>
);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement("div"))
  );
});
