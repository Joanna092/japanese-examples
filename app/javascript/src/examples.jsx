// home.jsx
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";
import logo from "./corona.jpg";

import "./styles.scss";
import "./examples.scss";
import SmallSearch from "./small_search";

const Examples = () => (
  <Layout>
    <SmallSearch />

    <div class="container mt-5">
      <div class="main-container">
        <div class="wrapper">
          <div class="box a">わたし、watashi, me</div>
          <div class="box b">
            <h1>私</h1>
          </div>
          <div class="box c">pronoun, level 1</div>
        </div>

        <h2>Examples:</h2>

        <div className="row">
          <div className="col-7">
            <h3>1</h3>

            <table>
              <tr>
                <th>Sentence:</th>
                <td>
                  騒（さわ）がしいホームで誰（だれ）かが私（わたし）の名前（なまえ）を呼（よ）んでいるのが聞（き）こえた。
                </td>
              </tr>

              <tr>
                <td></td>
                <td>
                  Sawagashii houmu de dare ka ga watashi no namae wo yonde iru
                  no ga kikoeta.
                </td>
              </tr>

              <tr>
                <th>Translation: </th>
                <td>
                  I could hear someone calling my name on the noisy platform.
                </td>
              </tr>

              <tr>
                <th>Full context: </th>
                <td>https://www.pixiv.net/en/artworks/81119676</td>
              </tr>

              <tr>
                <th>Added by: </th>
                <td>Joanna092</td>
              </tr>

              <tr>
                <th>Comments: </th>
                <td></td>
              </tr>
            </table>

            <div class="d-flex justify-content-left row">
              <div class="col-md-8">
                <div class="d-flex flex-column comment-section">
                  <div class="bg-white p-2">
                    <div class="d-flex flex-row user-info">
                      {" "}
                      {/* <img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" /> */}
                      <div class="d-flex flex-column justify-content-start ml-2">
                        <span class="d-block font-weight-bold name">
                          Marry Andrews
                        </span>
                        <span class="date text-black-50">
                          Shared publicly - Jan 2020
                        </span>
                      </div>
                    </div>
                    <div class="mt-2">
                      <p class="comment-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  </div>
                  <div class="bg-white p-2">
                    <div class="d-flex flex-row user-info">
                      {/* <img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" /> */}
                      <div class="d-flex flex-column justify-content-start ml-2">
                        <span class="d-block font-weight-bold name">
                          Marry Andrews
                        </span>
                        <span class="date text-black-50">
                          Shared publicly - Jan 2020
                        </span>
                      </div>
                    </div>
                    <div class="mt-2">
                      <p class="comment-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  </div>
                  <div class="bg-white">
                    <div class="d-flex flex-row fs-12">
                      <div class="like p-2 cursor">
                        <span class="ml-1">Comment</span>
                      </div>
                      <div class="like p-2 cursor">
                        <span class="ml-1">See all comments</span>
                      </div>
                    </div>
                  </div>
                  <div class="bg-light p-2">
                    <div class="d-flex flex-row align-items-start">
                      {/* <img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" /> */}
                      <textarea class="form-control ml-1 shadow-none textarea"></textarea>
                    </div>
                    <div class="mt-2 text-right">
                      <button
                        class="btn btn-primary btn-sm shadow-none"
                        type="button"
                      >
                        Post comment
                      </button>
                      <button
                        class="btn btn-outline-primary btn-sm ml-1 shadow-none"
                        type="button"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-5">
            <img className="img-fluid" src={logo} alt="Logo" />

            <p className="text-right">
              5
              <a>
                <i class="far fa-thumbs-up"></i>
              </a>
              130
              <a>
                <i class="far fa-thumbs-down"></i>
              </a>
            </p>
          </div>
        </div>

        <hr style={{ width: "40%" }}></hr>

        <button
          type="button"
          class="btn btn-outline-dark"
          style={{
            display: "block",
            margin: "0 auto",
            padding: "20px",
            marginTop: "20px",
            width: "30%",
          }}
        >
          Add your own example
        </button>
      </div>
    </div>
  </Layout>
);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Examples />,
    document.body.appendChild(document.createElement("div"))
  );
});
